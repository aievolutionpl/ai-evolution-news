# AI Evolution News — Terminal

Polskojęzyczny news portal (AI, krypto, tech, biznes, nauka) w stylu **terminala (Bluemark/Bloomberg)** — jasny, minimalistyczny, skoncentrowany na czytaniu wiadomości.

**Live:** https://ai-evolution-news.pages.dev

## Stack

- **Cloudflare Pages** (statyka + **Pages Functions** mini-server)
- **Cloudflare KV** = baza danych (binding `NEWS_DB`)
- **Vanilla JS + CSS** (bez frameworka), ikony **Lucide** jako lokalny SVG sprite
- Biblioteki self-hostowane w `/libs/`: **AOS** (animacje), **Toastify** (toasty), **Splide** (karuzela)

## Funkcje

- Terminalowy widok listy (dense rows) + siatka kart, przełączanie
- **Rozwijane newsy** — klik wiersz → pełny opis (`full`)
- **❓ Burza pytań** — 3 pytania do myślenia przy każdym newsie
- **💬 Anonimowe komentarze** — bez logowania (KV, anty-XSS, rate-limit)
- 🔥 Hot filter, **live ticker**, **karuzela gorących**, 10 kategorii
- Wyszukiwarka live (250ms debounce), widok Lista/Siatka
- Mobile: dolny pasek nawigacji (grid), safe-area
- 10 kategorii: AI, Krypto, Tech, Świat, Polska, Biznes, Nauka, Gaming, Kosmos, Zdrowie

## Struktura

```
pages/
├── index.html            # Single-page UI + JS (to show)
├── wrangler.toml         # Pages Functions + KV binding
├── icons.svg             # Lucide SVG sprite (zero CDN)
├── seed-news.json        # Dane startowe (42 newsy) — seed do KV
├── functions/api/
│   ├── news.js           # GET/POST/PUT/DELETE /api/news, GET /api/health
│   └── comments.js       # GET/POST /api/comments (anonimowe)
├── images/               # Grafiki newsów (PNG→JPEG)
├── libs/                 # aos.css/js, toastify.css/js, splide.css/js
└── data/                 # (gitignored) lokalne kopie danych
```

## Deploy

```bash
npx wrangler pages deploy . --project-name ai-evolution-news --commit-dirty=true
```

Wymaga `CLOUDFLARE_API_TOKEN` w env oraz `--config` wskazującego `wrangler.toml`.

## Zarządzanie — CLI `news`

W środowisku agenta (JARVIS) działa `/home/aibot/.hermes/scripts/news_cli.py`:

```bash
news status          # API OK + liczba newsów
news list            # lista z bazy
news add --title "..." --cat ai --source "..." --excerpt "..." [--hot]
news reseed [file]   # zastąp całą listę
news remove <id>     # usuń
news meta [date]     # data aktualizacji
news image <url> <id># pobierz + konwertuj obrazek (PNG→JPEG)
news deploy          # deploy Cloudflare Pages
```

**Flow dodania newsa:** `news image <url> <id>` → `news add --title ... --cat ... --excerpt ...` → `news deploy`.

## API

| Metoda | Endpoint | Opis |
|---|---|---|
| GET | `/api/news` | Lista newsów + meta |
| POST/PUT | `/api/news` | Zapis listy (wymaga Bearer token) |
| DELETE | `/api/news/:id` | Usuń news |
| GET | `/api/comments?news=<id>` | Komentarze dla newsa |
| POST | `/api/comments` | Dodaj anonimowy komentarz |

## Daily automation

Cron (JARVIS) codziennie 08:00: nowe newsy z obrazkiem do każdego + okresowe ulepszenia UI.

## Zasada grafik

Obrazki absolutnie bez liter/logo/tekstu (reguła no-text-in-assets, weryfikacja vision_analyze). Brandowe kolory: akcent `#0B6CD8`, cień — czysty, minimal.
