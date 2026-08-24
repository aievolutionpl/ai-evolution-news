# AI Evolution News

Polskojęzyczny news portal (AI, krypto, tech, świat, biznes, nauka, gaming, ciekawostki)
— **minimalistyczna czytelnia**: gęsty strumień depesz widoczny od razu po wejściu,
filtrowanie wyłącznie ikonami kanałów, klik rozwija zdjęcie i pełny tekst.

**Live:** https://ai-evolution-news.pages.dev

## Stack

- **Cloudflare Pages** (statyka + **Pages Functions** mini-server)
- **Cloudflare KV** = baza danych (binding `NEWS_DB`)
- **Vanilla JS + CSS** (bez frameworka, bez bibliotek), ikony **Lucide** jako lokalny SVG sprite
- Fonty systemowe — strona nie pobiera ani jednego zewnętrznego zasobu

## Funkcje

**Zasada UI v4: news od pierwszej sekundy.** Żadnego hero, karuzeli, tickera
ani paska filtrów przed treścią — pod nagłówkiem od razu zaczyna się strumień depesz.

- **Jeden gęsty strumień** — wszystkie depesze (obecnie 108) w jednej liście,
  posortowane od najnowszych, pogrupowane sticky nagłówkami dni („Dziś", „Wczoraj", data)
- **Filtrowanie tylko ikonami** — pasek kanałów w nagłówku to same ikony (Lucide),
  bez etykiet i bez rozwijanych list; obok trzy przełączniki: 🔥 gorące, ★ zapisane, 🔍 szukaj
- **Klik = pełna depesza** — wiersz rozwija się w czytnik: zdjęcie 16:9, lead,
  pełny tekst w mierze 66 znaków (16,5 px / 1,72), źródło, pytania do przemyślenia i komentarze
- **Treść budowana leniwie** — HTML rozwinięcia i obrazek powstają dopiero przy pierwszym
  otwarciu depeszy, więc lista 100+ pozycji renderuje się natychmiast
- **Zero zewnętrznych zasobów** — fonty systemowe, ikony z lokalnego sprite'a `icons.svg`,
  brak AOS/Splide/Toastify i brak Google Fonts; jedyne żądania to `/api/news` i `/api/comments`
- **Fallback danych** — gdy `/api/news` nie odpowiada, strona wczytuje `seed-news.json`,
  więc statyczny podgląd działa bez backendu
- **Dwa motywy** — ciemny (domyślny) i jasny; ustawiany przed pierwszym malowaniem,
  zapisywany w `localStorage`. Kolory kanałów przyciemniane `color-mix` na białym tle
- **Auto-okładki** — depesze bez zdjęcia dostają generowaną grafikę SVG (deterministycznie z `id`):
  cztery motywy przypisane do rodzin kanałów — obwód (AI/tech), słupki (krypto/biznes),
  orbity (kosmos/świat/Polska), fale (nauka/zdrowie), siatka (gaming/ciekawostki). Zero liter i logotypów
- **★ Zapisane** — depesze na później w `localStorage`, licznik na ikonie gwiazdki
- **🔗 Link do depeszy** — każda ma adres `#news-<id>`; przycisk kopiuje go do schowka
  (Web Share API tam, gdzie jest dostępne), a wklejony link otwiera ją od razu
- **💬 Anonimowe komentarze** — bez logowania (KV, anty-XSS, rate-limit), ładowane przy rozwinięciu
- **❓ Pytania do przemyślenia** — 2–3 pytania przy każdej depeszy
- **Wyszukiwarka odporna na polskie znaki** — „swiat" znajduje „Świat"; wiele słów działa
  jak AND (`gta rockstar`), 200 ms debounce, skrót `/`, `Esc` zamyka
- **Klawiatura** — `J`/`K` nawigacja, `Enter` rozwija, `S` zapisuje, `/` szuka, `Esc` zamyka
- Pasek postępu czytania, przycisk „do góry", `prefers-reduced-motion`
- Mobile: jedna kolumna, przewijany poziomo pasek ikon, meta w jednej linii,
  zero poziomego przewijania strony od 320 px w górę
- 11 kanałów z własnym kolorem i ikoną: AI, Krypto, Tech, Świat, Polska, Biznes,
  Nauka, Gaming, Kosmos, Zdrowie, Ciekawostki

## Skróty klawiszowe

| Klawisz | Działanie |
|---|---|
| `/` | otwórz wyszukiwarkę |
| `Esc` | zamknij wyszukiwarkę |
| `J` / `K` | następna / poprzednia depesza |
| `Enter` | rozwiń / zwiń zaznaczoną depeszę |
| `S` | zapisz / usuń z zapisanych |

## System designu

Wszystko oparte na tokenach CSS (`:root` = ciemny, `[data-theme="light"]` = jasny):
płótno, powierzchnie, linie, tekst, akcent, promienie. Zmiana palety = zmiana kilku zmiennych.

Ciemny: tło `#0B0D10`, linie `#242C35`, tekst `#E9EEF4`, akcent bursztyn `#FFA51F`,
hot `#FF5468`. Jasny: biel `#FFFFFF`, linie `#E2E6EC`, tekst `#0E1319`, akcent `#B96A00`.
Typografia to fonty systemowe (sans dla treści, mono dla metadanych) — zero pobierania.

Ikony to lokalny sprite `icons.svg` (styl Lucide, stroke 1.8, `viewBox 24`) —
jeden request, kolor dziedziczony przez `currentColor`.

## Struktura

```
pages/
├── index.html            # Single-page UI + JS
├── wrangler.toml         # Pages Functions + KV binding
├── icons.svg             # Lucide SVG sprite (zero CDN)
├── seed-news.json        # Dane startowe (108 depesz) — seed do KV + fallback dla frontu
├── functions/api/
│   ├── news.js           # GET/POST/PUT/DELETE /api/news, GET /api/health
│   └── comments.js       # GET/POST /api/comments (anonimowe)
├── images/               # Grafiki newsów (PNG→JPEG)
├── libs/                 # (nieużywane przez UI v4)
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
