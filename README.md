# AI Evolution News — Terminal

Polskojęzyczny news portal (AI, krypto, tech, świat, biznes, nauka, gaming, ciekawostki)
w stylu **terminala giełdowego (Bloomberg)** — ciemny, gęsty, monospace'owy,
skoncentrowany na szybkim skanowaniu i czytaniu depesz.

**Live:** https://ai-evolution-news.pages.dev

## Stack

- **Cloudflare Pages** (statyka + **Pages Functions** mini-server)
- **Cloudflare KV** = baza danych (binding `NEWS_DB`)
- **Vanilla JS + CSS** (bez frameworka), ikony **Lucide** jako lokalny SVG sprite
- Biblioteki self-hostowane w `/libs/`: **AOS** (animacje), **Toastify** (toasty), **Splide** (karuzela)

## Funkcje

- **Dwa motywy — terminal (ciemny, domyślny) i papier (jasny)**; przełącznik w topbarze
  lub `F7`, zapis w `localStorage`, ustawiany przed pierwszym malowaniem — zero migotania
- **Pasek stanu terminala** — sesja, liczba depesz, hot, kanały, „dziś", zapisane, data aktualizacji
- **Zegar sesji** w topbarze (HH:MM:SS, `tabular-nums`)
- **Pasek klawiszy funkcyjnych** `F1`–`F8` — znak firmowy terminala, klikalny i skrótowy
- **Historia dnia** (lead + 3 depesze poboczne), statystyki, tablica sygnałów live
- Terminalowy widok listy (dense rows, kod kanału jak ticker giełdowy) + siatka kart 16:9
- **Rozwijane depesze** — klik/Enter → czytnik: pełny opis (`full`), źródło, czas czytania
- **❓ Burza pytań** — 3 pytania do myślenia przy każdej depeszy
- **💬 Anonimowe komentarze** — bez logowania (KV, anty-XSS, rate-limit);
  liczniki ładowane leniwie przez `IntersectionObserver`
- **★ Zapisane** — depesze odkładane na później (`localStorage`), własny filtr i licznik
- **🔗 Link do depeszy** — każda ma adres `#news-<id>`; przycisk kopiuje go do schowka
  (Web Share API tam, gdzie jest dostępne), a wklejony link otwiera ją od razu
- **Sortowanie** — najnowsze / gorące / A→Z / czas czytania (zapamiętywane)
- **🎲 Losuj** — losowa depesza z aktualnego zestawu filtrów
- **Aktywne filtry** jako chipy z „✕" + „wyczyść wszystko"
- **Wyszukiwarka odporna na polskie znaki** — „swiat" znajduje „Świat", „lodz" znajduje „Łódź";
  wiele słów działa jak AND (`gta rockstar`), 220 ms debounce, skrót `/`, `Esc` czyści
- **Pełna obsługa klawiatury** — `J`/`K` nawigacja, `Enter` rozwija, `S` zapisuje,
  `F1` okno pomocy ze skrótami, `?` to samo
- **Auto-okładki** — depesze bez zdjęcia dostają generowaną, abstrakcyjną grafikę SVG
  (siatka terminala + geometria w kolorze kanału, deterministycznie z `id`, zero requestów)
- 🔥 Hot filter, **live ticker** (klik → skok do depeszy), **karuzela gorących**
- Pasek postępu czytania, przycisk „do góry", `prefers-reduced-motion`
- Mobile: dolny pasek nawigacji, safe-area, poziomy scroll depesz pobocznych, zero
  poziomego przewijania strony od 320 px w górę
- 11 kanałów z własnym kolorem, ikoną i **kodem giełdowym**: AI (`AI.`), Krypto (`CRY`),
  Tech (`TEC`), Świat (`WLD`), Polska (`POL`), Biznes (`BIZ`), Nauka (`SCI`), Gaming (`GAM`),
  Kosmos (`SPC`), Zdrowie (`MED`), Ciekawostki (`FUN`)

## Skróty klawiszowe

| Klawisz | Działanie |
|---|---|
| `/` | kursor w wyszukiwarce |
| `Esc` | wyczyść wyszukiwanie / zamknij okno |
| `J` / `K` | następna / poprzednia depesza |
| `Enter` | rozwiń / zwiń zaznaczoną depeszę |
| `S` | zapisz / usuń z zapisanych |
| `F1` / `?` | okno ze skrótami |
| `F2` / `F3` | widok listy / siatki |
| `F4` / `F5` | filtr: gorące / zapisane |
| `F6` | losowa depesza |
| `F7` | motyw terminal ↔ papier |
| `F8` | przewiń na górę |

## System designu

Wszystko jest oparte na tokenach CSS (`:root` = terminal, `[data-theme="light"]` = papier):
płótno, linie, typografia, akcenty, cienie, promienie. Zmiana palety = zmiana kilku zmiennych.

Paleta terminala: bursztyn `#FFA51F` (akcenty, aktywne stany, klawisze), cyan `#3FD8F0`
(dane i liczby), zieleń `#00D97E` (up/online), czerwień `#FF3B52` (down/hot) na czerni
`#04070B`. Krawędzie są ostre (`--r-xs: 2px`), chrom interfejsu jest w całości monospace,
a siatka linii zastępuje cienie. Kolory kanałów dobrano pod czarne tło i przyciemniono
przez `color-mix` w motywie jasnym, żeby chipy nie znikały na papierze.

Ikony to lokalny sprite `icons.svg` (styl Lucide, stroke 1.75, `viewBox 24`) —
jeden request, kolor dziedziczony przez `currentColor`.

## Struktura

```
pages/
├── index.html            # Single-page UI + JS (to show)
├── wrangler.toml         # Pages Functions + KV binding
├── icons.svg             # Lucide SVG sprite (zero CDN)
├── seed-news.json        # Dane startowe (75 depesz) — seed do KV
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
