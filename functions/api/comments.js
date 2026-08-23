/**
 * AI Evolution News — Pages Function: komentarze
 * Ścieżka: /api/comments
 *   GET  /api/comments?news=<id>        → lista komentarzy dla newsa
 *   POST /api/comments                  → dodaj komentarz (ANONIMOWY, bez logowania)
 *        body: {newsId, author?, content}
 *
 * Dane w Cloudflare KV (binding NEWS_DB) — klucz: comments:<newsId>
 * Zabezpieczenia: walidacja długości, czyszczenie HTML, prosty rate-limit per IP.
 */

const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Cache-Control': 'no-store',
};

const MAX_CONTENT = 2000;
const MAX_AUTHOR = 50;
const RATE_SECONDS = 15; // min odstęp między komentarzami tego samego IP

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  if (request.method === 'OPTIONS') {
    return new Response('', { status: 204, headers: JSON_HEADERS });
  }

  try {
    if (request.method === 'GET') {
      const newsId = url.searchParams.get('news');
      if (!newsId) return json({ error: 'Brak parametru news' }, 400);
      const list = await getComments(Number(newsId), env);
      return json({ comments: list });
    }

    if (request.method === 'POST') {
      const body = await request.json();
      const newsId = Number(body.newsId);
      const content = String(body.content || '').trim();
      const author = String(body.author || 'Anonim').trim().slice(0, MAX_AUTHOR) || 'Anonim';

      if (!newsId) return json({ error: 'Brak newsId' }, 400);
      if (!content) return json({ error: 'Pusta treść komentarza' }, 400);
      if (content.length > MAX_CONTENT) return json({ error: 'Komentarz za długi (max 2000 znaków)' }, 400);

      // Rate limit per IP
      const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
      const lastKey = `rate:${ip}`;
      const last = Number(await env.NEWS_DB.get(lastKey)) || 0;
      const now = Date.now();
      if (now - last < RATE_SECONDS * 1000) {
        return json({ error: 'Zbyt szybko — spróbuj za chwilę' }, 429);
      }
      await env.NEWS_DB.put(lastKey, String(now), { expirationTtl: 60 });

      const comment = {
        id: Date.now(),
        newsId,
        author: sanitize(author),
        content: sanitize(content),
        date: new Date().toISOString().slice(0, 10),
        time: new Date().toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' }),
      };

      const list = await getComments(newsId, env);
      list.push(comment);
      if (list.length > 200) list.shift(); // limit 200 komentarzy na news
      await env.NEWS_DB.put(key(newsId), JSON.stringify(list));
      return json({ ok: true, comment });
    }

    return json({ error: 'Metoda niedozwolona' }, 405);
  } catch (e) {
    return json({ error: e.message || 'Błąd serwera' }, 500);
  }
}

function key(newsId) { return `comments:${newsId}`; }

async function getComments(newsId, env) {
  const raw = await env.NEWS_DB.get(key(newsId));
  try { return raw ? JSON.parse(raw) : []; } catch (e) { return []; }
}

// czyszczenie HTML + skracanie białych znaków
function sanitize(s) {
  return s
    .replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
    .replace(/\s*\n\s*/g, '\n').trim();
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: JSON_HEADERS });
}
