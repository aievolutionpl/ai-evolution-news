/**
 * AI Evolution News — Pages Function (mini server)
 * Ścieżka: /api/news
 *   GET    /api/news        → lista newsów z KV
 *   POST   /api/news        → dodaj/aktualizuj news (auth: Bearer UPDATE_TOKEN)
 *   PUT    /api/news        → zastąp całą listę {news:[...], meta:{}}
 *   DELETE /api/news/:id    → usuń news (auth)
 *
 * Dane w Cloudflare KV (binding NEWS_DB) — trwała baza na serwerze.
 */

const KV_KEYS = {
  NEWS_LIST: 'news:list',
  META: 'news:meta',
  COUNTER: 'news:counter',
};

const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Cache-Control': 'public, max-age=60',
};

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  if (request.method === 'OPTIONS') {
    return new Response('', { status: 204, headers: JSON_HEADERS });
  }

  try {
    if (request.method === 'GET') {
      const data = await getPublicNews(context);
      return json({ ...data });
    }

    if (request.method === 'POST') {
      const auth = checkAuth(request, env);
      if (!auth.ok) return json({ error: auth.error }, 401);
      const body = await request.json();
      if (!body || !body.title) return json({ error: 'Brak tytułu' }, 400);
      const result = await upsertNews(body, env, context);
      return json({ ok: true, news: result }, 200);
    }

    if (request.method === 'PUT') {
      const auth = checkAuth(request, env);
      if (!auth.ok) return json({ error: auth.error }, 401);
      const body = await request.json();
      if (!body || !Array.isArray(body.news)) return json({ error: 'Oczekiwano {news:[...]}' }, 400);
      await env.NEWS_DB.put(KV_KEYS.NEWS_LIST, JSON.stringify(body.news));
      if (body.meta) await env.NEWS_DB.put(KV_KEYS.META, JSON.stringify(body.meta));
      return json({ ok: true, count: body.news.length });
    }

    // DELETE /api/news/123
    const idMatch = url.pathname.match(/\/api\/news\/(\d+)/);
    if (request.method === 'DELETE' && idMatch) {
      const auth = checkAuth(request, env);
      if (!auth.ok) return json({ error: auth.error }, 401);
      const ok = await deleteNews(Number(idMatch[1]), env);
      return json({ ok });
    }

    return json({ error: 'Metoda niedozwolona' }, 405);
  } catch (e) {
    return json({ error: e.message || 'Błąd serwera' }, 500);
  }
}

// ---------- helpers ----------

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: JSON_HEADERS });
}

function checkAuth(request, env) {
  const token = env.UPDATE_TOKEN || 'change-me';
  const header = request.headers.get('Authorization') || '';
  if (header === `Bearer ${token}`) return { ok: true };
  return { ok: false, error: 'Unauthorized' };
}

// Ziarno redakcyjne z repozytorium (statyk Pages). Trzymane w pamięci isolate'u,
// więc kolejne żądania na tym samym węźle nie płacą za ponowne parsowanie.
let SEED_CACHE = null;
async function getSeed(context) {
  if (SEED_CACHE) return SEED_CACHE;
  const assets = context.env && context.env.ASSETS;
  if (!assets || typeof assets.fetch !== 'function') return { news: [], meta: null };
  try {
    const url = new URL('/seed-news.json', context.request.url);
    const res = await assets.fetch(new Request(url.toString()));
    if (!res.ok) return { news: [], meta: null };
    const data = await res.json();
    SEED_CACHE = {
      news: Array.isArray(data.news) ? data.news : [],
      meta: data.meta || null,
    };
    return SEED_CACHE;
  } catch (e) {
    return { news: [], meta: null };
  }
}

// Odczyt publiczny: ziarno z repozytorium + to, co dopisano w KV (KV wygrywa po id).
// Dzięki temu wdrożenie nowych depesz w gicie jest widoczne od razu,
// a depesze dodane przez API nie znikają.
async function getPublicNews(context) {
  const [seed, kv] = await Promise.all([getSeed(context), getNews(context.env)]);
  const byId = new Map();
  for (const n of seed.news) if (n && n.id != null) byId.set(Number(n.id), n);
  for (const n of kv.news) if (n && n.id != null) byId.set(Number(n.id), n);
  const news = [...byId.values()].sort((a, b) => {
    const dd = String(b.date || '').localeCompare(String(a.date || ''));
    if (dd) return dd;
    return (Number(b.id) || 0) - (Number(a.id) || 0);
  });
  const meta = { ...(seed.meta || {}), ...(kv.meta || {}) };
  meta.count = news.length;
  meta.last_updated = news.reduce(
    (m, n) => (String(n.date || '') > m ? String(n.date) : m),
    String(meta.last_updated || '')
  );
  return { news, meta };
}

async function getNews(env) {
  const listRaw = await env.NEWS_DB.get(KV_KEYS.NEWS_LIST);
  const metaRaw = await env.NEWS_DB.get(KV_KEYS.META);
  let news = [];
  let meta = null;
  try { news = listRaw ? JSON.parse(listRaw) : []; } catch (e) { news = []; }
  try { meta = metaRaw ? JSON.parse(metaRaw) : null; } catch (e) { meta = null; }
  return { news, meta: meta || {} };
}

async function upsertNews(body, env, context) {
  const { news } = await getNews(env);
  // max id liczony z KV ORAZ z ziarna, żeby nowa depesza nie nadpisała pozycji z repozytorium
  const seed = context ? await getSeed(context) : { news: [] };
  const maxId = [...news, ...seed.news]
    .reduce((m, n) => Math.max(m, Number(n && n.id) || 0), 0);
  const counter = Math.max(Number(await env.NEWS_DB.get(KV_KEYS.COUNTER)) || 0, maxId);
  let target = body.id ? news.find(n => n.id === Number(body.id)) : null;
  if (target) {
    Object.assign(target, body);
  } else {
    const id = body.id || counter + 1;
    const entry = { id, ...body };
    news.unshift(entry);
    await env.NEWS_DB.put(KV_KEYS.COUNTER, String(Math.max(id, counter)));
    target = entry;
  }
  news.sort((a, b) => (b.hot ? 1 : 0) - (a.hot ? 1 : 0) || String(b.date || '').localeCompare(String(a.date || '')));
  await env.NEWS_DB.put(KV_KEYS.NEWS_LIST, JSON.stringify(news));
  return target;
}

async function deleteNews(id, env) {
  const { news } = await getNews(env);
  const filtered = news.filter(n => n.id !== id);
  if (filtered.length === news.length) return false;
  await env.NEWS_DB.put(KV_KEYS.NEWS_LIST, JSON.stringify(filtered));
  return true;
}
