import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "anthropic-ipo-fable",
    topic: "Anthropic: IPO 70–78 USD (do ~1,4 bln USD) + Claude Fable/Mythos 5.2",
    posts: [
      {
        handle: "JCPResearch",
        text: "Anthropic updated IPO filing: 825 million Class A shares at $70–$78, fully diluted valuation ~$1.404 trillion. Trading expected soon under ANT.",
        url: "https://x.com/JCPResearch/status/2120416855701717435",
      },
      {
        handle: "xingyuwang",
        text: "Claude Fable 5.2 from empty folder built a bootable OS prototype on a laptop in eight days.",
        url: "https://x.com/xingyuwang/status/2120416926170054974",
      },
    ],
  },
  {
    id: "gemini-4-carbon",
    topic: "Gemini 4 Carbon GA: $2/$10 za M tokenów (do 30.11), silny w agentach i cyber",
    posts: [
      {
        handle: "bankai_ajar",
        text: "Gemini 4 Carbon oficjalnie otwarty. Najsilniejszy model rozumujący Google, API 2/10 USD do 30 listopada, potem 4/20.",
        url: "https://x.com/bankai_ajar/status/2120416966745665935",
      },
      {
        handle: "paradax",
        text: "Gemini 4 Carbon napisał 5128 linii Pythona i wyrenderował w Blenderze 8s film z pelikanem na rowerze – bez zewnętrznych assetów.",
        url: "https://x.com/paradax/status/2120416911427273130",
      },
    ],
  },
  {
    id: "btc-etf-pressure",
    topic: "BTC ETF: odpływy trwają, kurs ~73–74k USD; YTD ujemne",
    posts: [
      {
        handle: "sincerequotess",
        text: "11.11: BTC przy 73k, obserwować czy ETF-y skończą serię net outflows i jak IPO Anthropic wpłynie na sentyment.",
        url: "https://x.com/sincerequotess/status/2120416936798642601",
      },
    ],
  },
  {
    id: "hermes-agent",
    topic: "Hermes Agent (~262k stars) nadal w topie open-source agentów",
    posts: [
      {
        handle: "QuietlyByG",
        text: "Hermes Agent: oficjalny Security plugin (SARIF/JSON/CSV/Markdown). OpenClaw v2026.11.2 – tylko fixy.",
        url: "https://x.com/QuietlyByG/status/2119683603999187447",
      },
    ],
  },
  {
    id: "claude-code-agents",
    topic: "Claude Code / Fable 5.2: mocne demo agentyczne i coding",
    posts: [
      {
        handle: "taiyanghere",
        text: "Fable 5.2: mniej niż godzina na grę z 1,5 mln pociągnięć pędzla, 200 fps w przeglądarce, wagi open-source.",
        url: "https://x.com/taiyanghere/status/2120416618002239545",
      },
    ],
  },
  {
    id: "skills-layer",
    topic: "Warstwa skills/memory wspólna dla Claude Code, OpenClaw, Hermes",
    posts: [
      {
        handle: "Saboo_Shubham_",
        text: "Claude Code, OpenClaw i Hermes mogą dzielić tę samą warstwę memory+skills. Jeden folder .agent/ działa na 8 harnessach.",
        url: "https://x.com/Saboo_Shubham_/status/2046473613105369468",
      },
    ],
  },
  {
    id: "github-agents-trending",
    topic: "GitHub: agent-browser, anthropics/skills i harnessy nadal mocno trending",
    posts: [
      {
        handle: "Teknium",
        text: "Hermes może pilotować sesję Claude Code bez psucia self-improvement loop – /claude-code <prompt>.",
        url: "https://x.com/Teknium/status/2040603975343542503",
      },
    ],
  },
  {
    id: "price-war",
    topic: "Wojna cenowa: Carbon 4× taniej niż Fable 5.2 przy porównywalnych wynikach agentycznych",
    posts: [
      {
        handle: "NekoStranding",
        text: "Gemini 4 Carbon: agresywne self-correction, mniej elegancji niż Argon, ale tanie i skuteczne na długich taskach.",
        url: "https://x.com/NekoStranding/status/2120416752488284174",
      },
    ],
  },
];
