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
      const data = await getNews(env);
      return json({ ...data });
    }

    if (request.method === 'POST') {
      const auth = checkAuth(request, env);
      if (!auth.ok) return json({ error: auth.error }, 401);
      const body = await request.json();
      if (!body || !body.title) return json({ error: 'Brak tytułu' }, 400);
      const result = await upsertNews(body, env);
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

async function getNews(env) {
  const listRaw = await env.NEWS_DB.get(KV_KEYS.NEWS_LIST);
  const metaRaw = await env.NEWS_DB.get(KV_KEYS.META);
  let news = [];
  let meta = { last_updated: new Date().toISOString().slice(0, 10) };
  try { news = listRaw ? JSON.parse(listRaw) : []; } catch (e) { news = []; }
  try { meta = metaRaw ? JSON.parse(metaRaw) : meta; } catch (e) { meta = meta; }
  return { news, meta };
}

async function upsertNews(body, env) {
  const { news } = await getNews(env);
  // liczba max id z listy + 1 (nie polega na counterze, bo PUT nie go aktualizuje)
  const maxId = news.reduce((m, n) => Math.max(m, Number(n.id) || 0), 0);
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
