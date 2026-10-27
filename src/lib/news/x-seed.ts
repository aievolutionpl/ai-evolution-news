import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "anthropic-ipo-s1",
    topic: "Anthropic składa S-1: debiut Nasdaq jako ANT, H1 revenue ~16,3 mld USD",
    posts: [
      {
        handle: "TheWireBrief",
        text: "Anthropic's initial public offering (IPO) marks a significant milestone for both Wall Street and the artificial intelligence industry. The company's stock will now serve as a benchmark for the AI sector.",
        url: "https://x.com/TheWireBrief/status/2114978473353875926",
      },
    ],
  },
  {
    id: "gpt-6-1-terra",
    topic: "OpenAI: GPT-6.1 Terra w ChatGPT Work i Codex, API o 50% taniej",
    posts: [
      {
        handle: "OpenAI",
        text: "GPT-6.1 Terra is rolling out now and is available to all Plus, Pro, Enterprise, and Edu users in ChatGPT Work and Codex. Developers can also access it through the OpenAI API as gpt-6.1-terra.",
        url: "https://x.com/OpenAI/status/2114780720170164735",
      },
    ],
  },
  {
    id: "gpt-terra-performance",
    topic: "GPT-6.1 Terra: lepiej na Agents’ Last Exam, tańszy i szybszy niż Astra w wielu taskach",
    posts: [
      {
        handle: "OpenAI",
        text: "GPT-6.1 Terra substantially outperforms GPT-5.6 Terra on Agents’ Last Exam... It even matches GPT-6 Astra at one-tenth the price per token and finishes tasks over 3× faster on average than both Astra and GPT-6.1 Sol.",
        url: "https://x.com/OpenAI/status/2114780717188272382",
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
    topic: "GitHub Trending: stablyai/orca (flota Claude Code/Grok Bot/Codex) i hermes-agent",
    posts: [
      {
        handle: "ainotesus",
        text: "Orca — a desktop app for running a fleet of coding agents at once, each in its own git worktree... Works with Claude Code, Codex, OpenCode, or any CLI agent.",
        url: "https://x.com/ainotesus/status/2113495785094447600",
      },
    ],
  },
  {
    id: "btc-80k",
    topic: "BTC ~79,6–80 tys. USD, lekkie spadki po mieszanych ETF",
    posts: [
      {
        handle: "CoinDesk",
        text: "Bitcoin steadies near $81,700 as altcoins rebound... (aktualizacja: obecnie ~79,7 tys. USD).",
        url: "https://www.coindesk.com/markets/2026/10/23/bitcoin-steadies-near-usd81-700-as-altcoins-rebound-pepe-climbs-13",
      },
    ],
  },
  {
    id: "cursor-agent-sdk",
    topic: "Cursor udostępnia Agent SDK: agenci jako kod (Markdown + TypeScript)",
    posts: [
      {
        handle: "Cursor",
        text: "Cursor announced that its Agent SDK is now available. Developers define agents as code, with prompts written in Markdown and tools in TypeScript.",
        url: "https://x.com/cursor_ai",
      },
    ],
  },
  {
    id: "kimi-k3-1-pro",
    topic: "Moonshot Kimi K3.1 Pro: open-weight 3T-class, 1M context, wagi do 4 listopada",
    posts: [
      {
        handle: "AGTPinsights",
        text: "Moonshot AI just officially launched Kimi K3.1 Pro today. It's their most capable 3T-class open-weight model. 1M-token context, multimodal, MoE 2.8T total / 104B active. Open weights by Nov 4.",
        url: "https://x.com/AGTPinsights/status/2113754221141197010",
      },
    ],
  },
];
