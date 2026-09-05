# AI Evolution News

Polskojęzyczny news portal (AI, krypto, tech, świat, biznes, nauka, gaming, ciekawostki)
— **minimalistyczna czytelnia**: gęsty strumień depesz widoczny od razu po wejściu,
filtrowanie ikonami kanałów, klik rozwija zdjęcie i pełny tekst.

Projekt **AI Evolution Polska**.

Od UI v8 układ jest trzykolumnowy: **kolumny reklamowe stoją w miejscu**
(`position:sticky`, przyklejone tuż pod paskiem LIVE), a przewija się wyłącznie
środkowy strumień depesz. Nad strumieniem sunie **pasek LIVE**, rozwinięta depesza
zaczyna się od **Sedna sprawy** i listy **Konkretów**, a pod tekstem stoją klikalne tagi.

Redakcję prowadzi agent opisany w [`AGENT-REDAKTOR.md`](AGENT-REDAKTOR.md) —
to jego brief: głos, zasady pisania, anatomia depeszy i lista kontrolna przed zapisem.

**Live:** https://ai-evolution-news.pages.dev

## Stack

- **Cloudflare Pages** (statyka + **Pages Functions** mini-server)
- **Cloudflare KV** = baza danych (binding `NEWS_DB`)
- **Vanilla JS + CSS** (bez frameworka, bez bibliotek), ikony **Lucide** jako lokalny SVG sprite
- Webfonty (Space Grotesk / IBM Plex) ładowane **bez blokowania renderu** —
  pierwsza klatka rysuje się fontami systemowymi, webfonty wskakują, gdy dojdą.
  Gdy CDN nie odpowiada, strona działa dalej bez żadnej zmiany zachowania

## Funkcje

**Zasada UI v8: news od pierwszej sekundy.** Żadnego hero i karuzeli — nad strumieniem
stoi tylko pasek LIVE (32 px, same tytuły); treść zaczyna się w pierwszym ekranie,
także na telefonie.

- **Trzy kolumny, przewija się jedna** — po bokach stoją kolumny reklamowe
  (`position:sticky`, `align-self:start`), przyklejone pod paskiem LIVE i **niezależne
  od przewijania**. Ruch ma wyłącznie środkowy strumień. Poniżej 1400 px znika prawa
  kolumna, poniżej 1120 px obie i strumień dostaje pełną szerokość. Na niskim oknie
  (< 820 px) chowa się drugi baner, żeby nie wisiał przycięty w połowie
- **Sedno sprawy i Konkrety w treści** — rozwinięta depesza otwiera się blokiem
  „co to zmienia", potem 3–4 twarde fakty z liczbami, dopiero potem tekst
- **Tagi pod tekstem** — klikalne, od razu przestawiają wyszukiwarkę na tę frazę
- **Pasek postępu czytania** — 2 px na górze okna, liczony w jednym `rAF`
  razem z przyciskiem „do góry" (jeden nasłuch scrolla na całą stronę)
- **Pasek LIVE** — sticky pod nagłówkiem, tor z najnowszymi depeszami przewija się
  od lewej do prawej jedną animacją `transform` (karta kompozytora, zero pracy JS na
  klatkę), pauzuje pod kursorem i przy fokusie, klik otwiera depeszę, a
  `prefers-reduced-motion` zamienia go w zwykły pasek przewijany palcem
- **Panele pod strumieniem** — Popularne (P190), Czego szukamy (P191, chmura tagów
  liczona z tytułów), GitHub Trending (P201) i Nowe modele LLM (P202)
- **Jeden gęsty strumień** — wszystkie depesze (obecnie **186**) w jednej liście,
  posortowane od najnowszych, pogrupowane sticky nagłówkami dni („Dziś", „Wczoraj", data)
- **Sedno sprawy** — wyróżniony blok na początku rozwinięcia: jedno zdanie o tym,
  co dana depesza faktycznie zmienia
- **Konkrety** — 3–4 punkty z twardymi faktami i liczbami wyjętymi z tekstu depeszy
- **Filtrowanie ikonami** — pasek kanałów w nagłówku to pigułki z numerem strony
  (P100…P111); obok cztery przełączniki: 🔥 gorące, ★ zapisane, 🔍 szukaj, ↻ odśwież.
  Na mobile dolny pasek zakładek + **arkusz „Więcej"** z pełną listą kanałów
  i licznikami (zamyka go tło, ✕ albo `Esc`)
- **Klik = pełna depesza** — wiersz rozwija się w czytnik: zdjęcie 16:9, lead, sedno,
  konkrety, pełny tekst w mierze 70 znaków (15,5 px / 1,72), tagi, źródło, pytania
  i komentarze
- **Render partiami** — pierwsza klatka rysuje 24 wiersze, kolejne dochodzą przy
  dojeździe do końca listy (`IntersectionObserver` + dopięcie w `rAF`, bo obserwator
  odpala się wyłącznie przy zmianie stanu); wiersze poza ekranem pomija
  `content-visibility:auto`. Skok po `#news-<id>` dosuwa listę aż do celu
- **Treść budowana leniwie** — HTML rozwinięcia i generowana okładka powstają dopiero
  przy pierwszym otwarciu depeszy
- **Indeks wyszukiwania liczony raz** — przy wczytaniu danych, a nie przy każdym
  wpisanym znaku; obejmuje tytuł, zajawkę, treść, sedno, konkrety, tagi i źródło
- **Lekkie wejście** — `index.html`, `icons.svg` i dane. Favicon 32 px, zero
  AOS/Splide/Toastify, webfonty nie blokują pierwszej klatki
- **Dane: ziarno + KV** — `/api/news` scala `seed-news.json` z repozytorium z tym, co
  dopisano w KV (KV wygrywa po `id`), więc wdrożenie nowych depesz w gicie jest widoczne
  od razu. Gdy API nie odpowiada, front i tak wczytuje `seed-news.json`
- **Dwa motywy** — jasny (domyślny) i ciemny; ustawiany przed pierwszym malowaniem,
  zapisywany w `localStorage`
- **Auto-okładki** — depesze bez zdjęcia dostają generowaną grafikę SVG (deterministycznie z `id`):
  cztery motywy przypisane do rodzin kanałów — obwód (AI/tech), słupki (krypto/biznes),
  orbity (kosmos/świat/Polska), fale (nauka/zdrowie), siatka (gaming/ciekawostki). Zero liter i logotypów
- **★ Zapisane** — depesze na później w `localStorage`, licznik na ikonie gwiazdki
- **🔗 Link do depeszy** — każda ma adres `#news-<id>`; przycisk kopiuje go do schowka
  (Web Share API tam, gdzie jest dostępne), a wklejony link otwiera ją od razu
- **💬 Anonimowe komentarze** — bez logowania (KV, anty-XSS, rate-limit), ładowane przy rozwinięciu
- **❓ Pytania do przemyślenia** — 3 pytania przy każdej depeszy, pisane pod konkretny temat
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
| `Esc` | zamknij wyszukiwarkę → arkusz kanałów → rozwiniętą depeszę |
| `J` / `K` | następna / poprzednia depesza |
| `Enter` | rozwiń / zwiń zaznaczoną depeszę |
| `S` | zapisz / usuń z zapisanych |

## System designu

Wszystko oparte na tokenach CSS (`:root` = jasny, `[data-theme="dark"]` = ciemny):
płótno, powierzchnie, linie, tekst, akcent, promienie, szerokości kolumn.
Zmiana palety = zmiana kilku zmiennych.

Jasny: tło `#F4F5F2`, powierzchnia `#FFFFFF`, linie `#D8DCE0`, tekst `#111111`,
akcent żółty `#F4B400`. Ciemny: `#0B0D0E`, `#15181B`, `#272C31`, `#EDEFF1`, `#F7C13B`.

Zmienne układu: `--shell-maxw` (1560 px), `--rail-w` (224 px — kolumny reklamowe),
`--rail-gap` i `--ticker-h` — ta ostatnia trzyma zgodność między wysokością paska LIVE
a `top` wszystkich elementów przyklejonych pod nim (nagłówki dni, kolumny reklamowe).

Typografia: Space Grotesk (nagłówki), IBM Plex Sans (treść), IBM Plex Mono (metadane),
każdy z pełnym stosem systemowych zapasów.

Ikony to lokalny sprite `icons.svg` (styl Lucide, stroke 1.8, `viewBox 24`) —
jeden request, kolor dziedziczony przez `currentColor`.

## Struktura

```
pages/
├── index.html            # Single-page UI + JS
├── wrangler.toml         # Pages Functions + KV binding
├── icons.svg             # Lucide SVG sprite (zero CDN)
├── seed-news.json        # Korpus redakcyjny (186 depesz, zminifikowany) — scalany w /api/news
├── AGENT-REDAKTOR.md     # Brief agenta prowadzącego redakcję — czytaj przed pisaniem
├── .claude/agents/
│   └── redaktor.md       # Ten sam agent jako subagent Claude Code (/agents → redaktor)
├── functions/api/
│   ├── news.js           # GET/POST/PUT/DELETE /api/news, GET /api/health
│   └── comments.js       # GET/POST /api/comments (anonimowe)
├── images/               # Grafiki newsów: JPEG 800×450 + autorskie okładki art-*.svg
│   └── IMAGE-DB.json     # Bank grafik z opisami scen
├── libs/                 # (nieużywane przez UI — zostały po v2)
└── data/                 # (gitignored) lokalne kopie danych
```

## Schemat depeszy

```jsonc
{
  "id": 142,
  "title": "…",
  "category": "biznes",          // ai|krypto|tech|swiat|polska|biznes|nauka|gaming|kosmos|zdrowie|fun
  "date": "2026-09-01",
  "source": "CNBC / Reuters",
  "hot": true,
  "excerpt": "Zajawka — pokazywana w wierszu i jako lead.",
  "full": "Akapity rozdzielone pustą linią.",
  "why": "Sedno sprawy: jedno zdanie o tym, co to zmienia.",
  "points": ["Konkret 1", "Konkret 2", "Konkret 3"],
  "questions": ["Pytanie 1", "Pytanie 2", "Pytanie 3"],
  "tags": ["tag1", "tag2", "tag3"],
  "image": "/images/news-142.jpg"   // opcjonalne — bez niego generowana okładka SVG
}
```

`why`, `points` i `tags` są technicznie opcjonalne — bez nich UI po prostu nie rysuje
danego bloku — ale redakcyjnie **obowiązkowe**: dziś komplet ma 186/186 depesz.
Zasady pisania każdego z tych pól opisuje [`AGENT-REDAKTOR.md`](AGENT-REDAKTOR.md).

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
| GET | `/api/news` | Lista newsów + meta (ziarno z repo scalone z KV) |
| POST/PUT | `/api/news` | Zapis listy (wymaga Bearer token) |
| DELETE | `/api/news/:id` | Usuń news |
| GET | `/api/comments?news=<id>` | Komentarze dla newsa |
| POST | `/api/comments` | Dodaj anonimowy komentarz |

## Daily automation

Cron (JARVIS) codziennie 08:00: nowe newsy z obrazkiem do każdego + okresowe ulepszenia UI.

## Zasada grafik

Obrazki **absolutnie bez liter, logo i znaków wodnych** (reguła no-text-in-assets).
Format 800 × 450: JPEG dla zdjęć, SVG dla grafik abstrakcyjnych. Każda nowa grafika
dostaje wpis w `images/IMAGE-DB.json` z opisem sceny; jednej grafiki nie przypisujemy
więcej niż trzem depeszom.

Okładki `art-*.svg` to autorskie kompozycje wektorowe: ciemna baza, geometria
w kolorze kanału, jedno ognisko. Ważą po 3–22 kB, czyli ułamek zdjęcia,
i skalują się bez utraty ostrości.

## Kontrola jakości korpusu

```bash
python3 - <<'EOF'
import json
d = json.load(open('seed-news.json'))
n = d['news']
assert len({x['id'] for x in n}) == len(n), 'zduplikowane id'
assert d['meta']['count'] == len(n), 'meta.count nie zgadza się z listą'
print('OK:', len(n), 'depesz')
EOF
```

Poza tym przed każdym wdrożeniem warto sprawdzić: rekordy testowe w tytułach,
puste `full`, mojibake (`Ä`, `Å`, `â€`), martwe ścieżki grafik i — najważniejsze —
czy `full` opowiada o tym samym co `title`. Pełna lista kontrolna: §7 i §8
w [`AGENT-REDAKTOR.md`](AGENT-REDAKTOR.md).
