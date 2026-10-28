import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "anthropic-s1-ipo",
    topic: "Anthropic S-1: Nasdaq ANT, H1 revenue ~16,3 mld USD, net loss ~80,7 mld (głównie non-cash)",
    posts: [
      {
        handle: "runes_leo",
        text: "Anthropic 递交上市申请，标题都在写「半年亏了 807 亿美元」。我翻了 S-1 原文，这个数大半是账面上的：上半年收入 163 亿美元... 真正做生意的经营亏损是 6.9 亿... 807 亿里有 724 亿，是可转债、SAFE 这类融资工具按公允价值重估。",
        url: "https://x.com/runes_leo/status/2115340287182872620",
      },
    ],
  },
  {
    id: "gpt-61-terra-rollout",
    topic: "OpenAI: GPT-6.1 Terra w ChatGPT Work, Codex i API (50% taniej niż 5.6 Terra)",
    posts: [
      {
        handle: "OpenAI",
        text: "GPT-6.1 Terra is rolling out now and is available to all Plus, Pro, Enterprise, and Edu users in ChatGPT Work and Codex. Developers can also access it through the OpenAI API as gpt-6.1-terra.",
        url: "https://x.com/OpenAI/status/2114780720170164735",
      },
    ],
  },
  {
    id: "gpt-terra-agents-exam",
    topic: "GPT-6.1 Terra: lepszy na Agents’ Last Exam, 3× szybszy niż Astra/Sol w wielu taskach",
    posts: [
      {
        handle: "OpenAI",
        text: "GPT-6.1 Terra substantially outperforms GPT-5.6 Terra on Agents’ Last Exam... It even matches GPT-6 Astra at one-tenth the price per token and finishes tasks over 3× faster on average than both Astra and GPT-6.1 Sol.",
        url: "https://x.com/OpenAI/status/2114780717188272382",
      },
    ],
  },
  {
    id: "aa-intelligence-index-v5",
    topic: "Artificial Analysis Intelligence Index v5: Claude Opus 5.5 na czele, GPT-6.1 Terra najtańszy wśród liderów",
    posts: [
      {
        handle: "ArtificialAnlys",
        text: "Announcing Artificial Analysis Intelligence Index v5... Claude Opus 5.5 (max) leads at 58, ahead of GPT-6 Astra (max, 57) and GPT-6.1 Sol (max, 55)... GPT-6.1 Terra (max) is the cheapest at $0.96 per Intelligence Index task.",
        url: "https://x.com/ArtificialAnlys/status/2115265133467635877",
      },
    ],
  },
  {
    id: "claude-code-mcp-tasks",
    topic: "Claude Code: MCP Tasks i Elicitations w public beta (CLI v2.1.304+)",
    posts: [
      {
        handle: "alexmichael",
        text: "Claude announces MCP Tasks for Claude Code. Slow tools no longer block Claude. Long jobs run on the server in the background while Claude keeps working. Public beta in the CLI, v2.1.304+",
        url: "https://x.com/alexmichael/status/2113699035035193510",
      },
    ],
  },
  {
    id: "github-orca-hermes",
    topic: "GitHub: stablyai/orca (~108k) i NousResearch/hermes-agent (~258k) w czołówce agent tools",
    posts: [
      {
        handle: "ainotesus",
        text: "Orca — a desktop app for running a fleet of coding agents at once, each in its own git worktree... Works with Claude Code, Codex, OpenCode, or any CLI agent.",
        url: "https://x.com/ainotesus/status/2113495785094447600",
      },
    ],
  },
  {
    id: "btc-80k-range",
    topic: "BTC ~80,7–81 tys. USD, stabilizacja po wcześniejszych wahaniach wokół 80k",
    posts: [
      {
        handle: "CoinDesk",
        text: "Bitcoin steadies near $81,700 as altcoins rebound (aktualizacja z okolic 80,8 tys. USD na 28.10).",
        url: "https://www.coindesk.com/markets/2026/10/23/bitcoin-steadies-near-usd81-700-as-altcoins-rebound-pepe-climbs-13",
      },
    ],
  },
  {
    id: "openclaw-agents-trend",
    topic: "OpenClaw i Hermes: dyskusje o personal agentach jako następcach konfiguracyjnych narzędzi",
    posts: [
      {
        handle: "Halpingai",
        text: "Verdict: n8n and are yesterday's answer to automation. Better Rube Goldberg machines. OpenClaw is what comes after. A teammate you talk to, not a machine you configure.",
        url: "https://x.com/Halpingai/status/2115338051933147576",
      },
    ],
  },
];
