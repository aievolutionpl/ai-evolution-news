import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "anthropic-ipo-countdown",
    topic: "Anthropic IPO: range 70–78 USD, trading 19.11 (ANT), wycena do ~1,4 bln",
    posts: [
      {
        handle: "TMA_MarketIntel",
        text: "ALIBABA SAYS ITS NEW AI BEATS ANTHROPIC, THE SAME WEEK ANTHROPIC GOES PUBLIC. Qwen4-Max, 2.4T params, claims better than Fable 5.1 on coding.",
        url: "https://x.com/TMA_MarketIntel/status/2122227819119837467",
      },
      {
        handle: "Biz_zatukora",
        text: "Anthropic: IPO range $70–78, up to ~$64.4B raised, fully diluted ~$1.4T. Pricing 18.11, trading 19.11.",
        url: "https://x.com/Biz_zatukora/status/2122227730410541416",
      },
    ],
  },
  {
    id: "gemini-4-hydrogen",
    topic: "Gemini 4 Hydrogen: szybki model agentyczny $1,50/$7,50, po Carbon",
    posts: [
      {
        handle: "k2sbhai",
        text: "students can now get Gemini 4 Hydrogen FREE for 1 year. Google AI Plus for university students: Hydrogen + higher limits.",
        url: "https://x.com/k2sbhai/status/2122227831786868869",
      },
      {
        handle: "aicreatorpath",
        text: "Google AI: Gemini 4 Hydrogen major upgrade for Google Search. ‘Now in Google Search’ examples released.",
        url: "https://x.com/aicreatorpath/status/2122227583312183741",
      },
    ],
  },
  {
    id: "qwen4-max",
    topic: "Qwen4-Max (Alibaba): 2.4T MoE, $1.50/$4.50, twierdzi lepszy od Fable 5.1",
    posts: [
      {
        handle: "Alibaba_Qwen",
        text: "Meet Qwen4-Max: MoE 2.4T, 1M context, native vision. Cost per task down ~60%, API $1.5/$4.5. Open weights of smaller models coming.",
        url: "https://x.com/Alibaba_Qwen/status/2122148127520289151",
      },
      {
        handle: "piasetzky",
        text: "Qwen4Max out – 2.4T parameters, $1.50 per million input. 43 on Artificial Analysis, still behind Fable 5.2. Smaller 27b on 16GB RAM.",
        url: "https://x.com/piasetzky/status/2122227632926236985",
      },
    ],
  },
  {
    id: "btc-etf-outflows",
    topic: "BTC ~64–65k: odpływy ETF ~1,9 mld USD, spadek od ~74k",
    posts: [
      {
        handle: "hanqing1120",
        text: "Bitcoin fell to $62,006. CZ listed reasons including money going to Anthropic IPO and ETF outflows (~$1.9B net in 7 sessions to Nov 13).",
        url: "https://x.com/hanqing1120/status/2122227745401057455",
      },
      {
        handle: "Jimbo_Finance",
        text: "Im not selling my BTC into this tape",
        url: "https://x.com/Jimbo_Finance/status/2122227820675858555",
      },
    ],
  },
  {
    id: "claude-meetings",
    topic: "Claude Meetings beta: Claude w Google Meet, notes + artifacts live",
    posts: [
      {
        handle: "ShardingCapital",
        text: "Anthropic launches office tools before its IPO: Claude Meetings, Sheets, Whiteboards – against Microsoft.",
        url: "https://x.com/ShardingCapital/status/2122227543533351049",
      },
    ],
  },
  {
    id: "hermes-openclaw-skills",
    topic: "Hermes Agent (~263k stars) i OpenClaw: skills + memory layer portable",
    posts: [
      {
        handle: "Saboo_Shubham_",
        text: "Claude Code, OpenClaw, and Hermes Agent can now share the same memory-and-skills layer. One portable .agent/ folder across 8 harnesses.",
        url: "https://x.com/Saboo_Shubham_/status/2046473613105369468",
      },
      {
        handle: "CodetocashAi",
        text: "OpenViking long-term memory: Claude Code 57%→80%, Hermes 33%→82%, OpenClaw 24%→82% accuracy. Separate project/memory/skills.",
        url: "https://x.com/CodetocashAi/status/2121734682773442990",
      },
    ],
  },
  {
    id: "github-skills-trending",
    topic: "GitHub: skills, memory i harnessy agentów nadal mocno trending",
    posts: [
      {
        handle: "elvissun",
        text: "Spent 9h comparing OpenClaw and Hermes source. Hermes self-improves by writing skills; OpenClaw more governance/minimal. Both solid.",
        url: "https://x.com/elvissun/status/2045155784577687862",
      },
    ],
  },
  {
    id: "agent-marketplace",
    topic: "Agenci na marketplace: skill packages, on-chain settlement (TermiX itp.)",
    posts: [
      {
        handle: "billzcollecshun",
        text: "Agent marketplace: install skill package with one prompt (Claude Code, OpenClaw, Codex…). On-chain escrow, ERC-8004 identity, AACP protocol.",
        url: "https://x.com/billzcollecshun/status/2122227533538091107",
      },
    ],
  },
];
