import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "hacktron-openai-claude",
    topic: "Hacktron + Claude Opus 5: bounty w OpenAI",
    posts: [
      {
        handle: "S1r1u5_",
        text: "On July 25, we hacked OpenAI. Two bugs let us take over ChatGPT/Codex accounts of OpenAI employees and reach connected services: Outlook, Slack, GitHub. We proved it with a PR in OpenAI's internal codebase. It took us <72 hrs.",
        url: "https://x.com/S1r1u5_",
      },
    ],
  },
  {
    id: "anthropic-accenture-eval",
    topic: "Anthropic + Accenture: ewaluacja za 1+1 mld USD",
    posts: [
      {
        handle: "AnthropicAI",
        text: "We're partnering with Accenture on independent evaluation of frontier AI—part of our recent commitment to embed evaluators at Anthropic. Both we and Accenture expect to invest at least $1 billion to build capacity in this area over the next five years.",
        url: "https://x.com/AnthropicAI/status/2101039819870937247",
      },
    ],
  },
  {
    id: "reuters-anthropic-model",
    topic: "Reuters: Anthropic waży nowy model przed IPO",
    posts: [
      {
        handle: "David_SmithA1",
        text: "JUST IN: Anthropic, the company behind Claude, is reportedly eyeing an IPO as early as November at a valuation near $2 trillion. That would make it one of the largest public listings in history.",
        url: "https://x.com/David_SmithA1/status/2101072014358515778",
      },
    ],
  },
  {
    id: "astra-vs-fable",
    topic: "Astra 13% vs Fable 8% wydatków enterprise (Ramp)",
    posts: [
      {
        handle: "defileo",
        text: "A neutral referee gave GPT-6 Astra a 61 on the Intelligence Index, the same as its predecessor. Claude Fable 5.1 sits at 66 on the same harness. Mythos 5.1, same weights as Fable with fewer guardrails, is handed only to verified labs.",
        url: "https://x.com/defileo/status/2101007936541827468",
      },
    ],
  },
  {
    id: "btc-81k",
    topic: "Bitcoin nad 81 tys. USD po squeeze shortów",
    posts: [
      {
        handle: "ScalpingX",
        text: "Crypto Absorbs Fed and CLARITY Shocks as BTC Tests $81,000. Bitcoin closed the September 14–18 week with a strong rebound, briefly breaking above $81,000. Roughly $238 million in short positions were liquidated as price moved above $80,000.",
        url: "https://x.com/ScalpingX/status/2101193115034104093",
      },
    ],
  },
  {
    id: "browserskill-trending",
    topic: "GitHub: Tencent/BrowserSkill na Trending",
    posts: [
      {
        handle: "GitHubGPT",
        text: "BrowserSkill connects AI agents to your logged-in browser to automate web tasks without interrupting your work. TypeScript. Tencent/BrowserSkill on GitHub.",
        url: "https://x.com/GitHubGPT/status/2101060512062869773",
      },
    ],
  },
  {
    id: "openai-astra-law",
    topic: "OpenAI: Astra for Law, indeks 230 mln URL",
    posts: [
      {
        handle: "OpenAI",
        text: "Astra for Law pairs GPT-6 Astra with instructions for legal analysis and writing, settings for thorough work, and a new Legal Search Index. The index searches U.S. case law, statutes, regulations, court rules, and administrative decisions across more than 230 million URLs.",
        url: "https://x.com/OpenAI/status/2100679994305630562",
      },
    ],
  },
  {
    id: "class-action-pact",
    topic: "Pozew: rzekomy pakt o spowolnieniu frontier AI",
    posts: [
      {
        handle: "RafaelPradox",
        text: "Hacktron used Claude Opus 5 to exploit a libheif bug on OpenAI's Discourse forum, then chained an SSO sign-in flaw into employee ChatGPT/Codex takeover — proof was a harmless internal PR. OpenAI fixed it in ~14 hours. $6,500 bounty.",
        url: "https://x.com/RafaelPradox/status/2101178009864614219",
      },
    ],
  },
];
