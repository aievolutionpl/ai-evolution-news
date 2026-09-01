# AI Evolution News

Polskojęzyczny news portal (AI, krypto, tech, świat, biznes, nauka, gaming, ciekawostki)
— **minimalistyczna czytelnia**: gęsty strumień depesz widoczny od razu po wejściu,
filtrowanie ikonami kanałów, klik rozwija zdjęcie i pełny tekst.

Projekt **AI Evolution Polska**.

Od UI v7 nad strumieniem stoi przewijający się **pasek LIVE** (tor sunie od lewej do
prawej, zatrzymuje się pod kursorem) i panel **Puls dnia** ze statystykami oraz tagami
„na tapecie". Każdy wiersz niesie zajawkę i tagi, a rozwinięta depesza zaczyna się od
**Sedna sprawy** i listy **Konkretów**. Stopka jest pełną nawigacją: kanały z licznikami,
skróty do narzędzi i informacja, czyj to projekt.

**Live:** https://ai-evolution-news.pages.dev

## Stack

- **Cloudflare Pages** (statyka + **Pages Functions** mini-server)
- **Cloudflare KV** = baza danych (binding `NEWS_DB`)
- **Vanilla JS + CSS** (bez frameworka, bez bibliotek), ikony **Lucide** jako lokalny SVG sprite
- Fonty systemowe — strona nie pobiera ani jednego zewnętrznego zasobu

## Funkcje

**Zasada UI v7: news od pierwszej sekundy.** Żadnego hero i karuzeli — nad strumieniem
stoi tylko pasek LIVE (36 px, same tytuły) i panel Puls dnia; treść zaczyna się
w pierwszym ekranie, także na telefonie.

- **Pasek LIVE** — sticky pod nagłówkiem, tor z 26 najnowszymi depeszami przewija się
  od lewej do prawej jedną animacją `transform` (karta kompozytora, zero pracy JS na
  klatkę), pauzuje pod kursorem i przy fokusie, klik otwiera depeszę, a
  `prefers-reduced-motion` zamienia go w zwykły pasek przewijany palcem
- **Puls dnia** — panel nad strumieniem: ile depesz dziś, ile gorących, ile kanałów,
  ile w archiwum, plus osiem najczęstszych tagów z ostatnich 70 depesz (klikalne)
- **Stopka jako nawigacja** — kanały z licznikami, skróty do trybów (gorące, zapisane,
  szukaj, motyw, na górę), sygnatura **Projekt AI Evolution Polska**, łączny czas czytania
- **Wczytywanie dwutorowe** — pierwsza klatka rysuje się z wstępnie pobranego
  `seed-news.json` (`<link rel=preload>`), a odpowiedź `/api/news` dokłada nowości w tle;
  wcześniej strona czekała na API, a preload szedł w kosz
- **Jeden gęsty strumień** — wszystkie depesze (obecnie 165) w jednej liście,
  posortowane od najnowszych, pogrupowane sticky nagłówkami dni („Dziś", „Wczoraj", data)
- **Zajawka i tagi w wierszu** — widać, o co chodzi, bez rozwijania; tag jest klikalny
  i od razu przestawia wyszukiwarkę na tę frazę
- **Sedno sprawy** — wyróżniony blok na początku rozwinięcia: jedno zdanie o tym,
  co dana depesza faktycznie zmienia
- **Konkrety** — 3 punkty z twardymi faktami i liczbami wyjętymi z tekstu depeszy
- **Filtrowanie ikonami** — pasek kanałów w nagłówku to ikony (Lucide) z etykietą
  aktywnego i pod kursorem; obok trzy przełączniki: 🔥 gorące, ★ zapisane, 🔍 szukaj.
  Na mobile dolny pasek zakładek + arkusz „Więcej" z pełną listą kanałów
- **Klik = pełna depesza** — wiersz rozwija się w czytnik: zdjęcie 16:9, sedno, konkrety,
  lead, pełny tekst w mierze 66 znaków (16,5 px / 1,72), tagi, źródło, pytania i komentarze
- **Render partiami** — pierwsza klatka rysuje 24 wiersze, kolejne dochodzą przy
  dojeździe do końca listy (`IntersectionObserver`); wiersze poza ekranem pomija
  `content-visibility:auto`
- **Treść budowana leniwie** — HTML rozwinięcia i generowana okładka powstają dopiero
  przy pierwszym otwarciu depeszy; miniaturka w wierszu to czyste CSS, zero żądań
- **Indeks wyszukiwania liczony raz** — przy wczytaniu danych, a nie przy każdym
  wpisanym znaku
- **Trzy żądania na wejściu** — `index.html`, `icons.svg` i dane. Favicon jest wpisany
  w stronę jako SVG (wcześniej ciągnął 900 kB PNG), fonty są systemowe, brak
  AOS/Splide/Toastify i brak Google Fonts
- **Dane: ziarno + KV** — `/api/news` scala `seed-news.json` z repozytorium z tym, co
  dopisano w KV (KV wygrywa po `id`), więc wdrożenie nowych depesz w gicie jest widoczne
  od razu. Gdy API nie odpowiada, front i tak wczytuje `seed-news.json`
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

Ciemny: tło `#0A0C0F`, linie `#232B36`, tekst `#EAEFF5`, akcent bursztyn `#FFA724`,
hot `#FF5A6E`. Jasny: `#FCFCFD`, linie `#E3E8EF`, tekst `#0D1219`, akcent `#B25E00`,
hot `#C8253A`. Kolory kanałów dobrano pod ciemne tło i przyciemnia je `color-mix`
na jasnym.
Typografia to fonty systemowe (sans dla treści, mono dla metadanych) — zero pobierania.

Ikony to lokalny sprite `icons.svg` (styl Lucide, stroke 1.8, `viewBox 24`) —
jeden request, kolor dziedziczony przez `currentColor`.

## Struktura

```
pages/
├── index.html            # Single-page UI + JS
├── wrangler.toml         # Pages Functions + KV binding
├── icons.svg             # Lucide SVG sprite (zero CDN)
├── seed-news.json        # Korpus redakcyjny (165 depesz, zminifikowany) — scalany w /api/news
├── functions/api/
│   ├── news.js           # GET/POST/PUT/DELETE /api/news, GET /api/health
│   └── comments.js       # GET/POST /api/comments (anonimowe)
├── images/               # Grafiki newsów (PNG→JPEG)
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

`why`, `points` i `tags` są opcjonalne: bez nich UI po prostu nie rysuje danego bloku.

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

Obrazki absolutnie bez liter/logo/tekstu (reguła no-text-in-assets, weryfikacja vision_analyze). Brandowe kolory: akcent `#0B6CD8`, cień — czysty, minimal.
