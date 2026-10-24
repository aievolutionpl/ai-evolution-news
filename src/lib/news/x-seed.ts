import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "kimi-k3-1-pro",
    topic: "Moonshot AI: Kimi K3.1 Pro — 3T-class open-weight, 1M context, wagi do 4 listopada",
    posts: [
      {
        handle: "AGTPinsights",
        text: "Moonshot AI just officially launched Kimi K3.1 Pro today. It's their most capable 3T-class open-weight model. 1M-token context, multimodal, MoE 2.8T total / 104B active. Open weights by Nov 4.",
        url: "https://x.com/AGTPinsights/status/2113754221141197010",
      },
    ],
  },
  {
    id: "claude-code-mcp-tasks",
    topic: "Anthropic: Claude Code dostaje MCP Tasks i Elicitations (od CLI v2.1.304)",
    posts: [
      {
        handle: "ClaudeDevs",
        text: "We’re adding support for MCP Tasks and Elicitations in Claude. Tasks let Claude give plugins long-running jobs such as deep research and report back when they’re done.",
        url: "https://x.com/ClaudeDevs/status/2113698001889927608",
      },
    ],
  },
  {
    id: "openai-google-cloud",
    topic: "OpenAI modele frontier i Codex agentic workflows na Google Cloud Model Garden",
    posts: [
      {
        handle: "OpenAI",
        text: "OpenAI models are coming to Google Cloud. We're bringing our frontier models and Codex agentic workflows to Google Cloud's Model Garden, so enterprises can use our technology where they already build.",
        url: "https://x.com/OpenAI/status/2112988118471295323",
      },
    ],
  },
  {
    id: "openai-offline-training",
    topic: "OpenAI: trening frontier modeli offline, zaostrzone sandboxy po incydencie DNS",
    posts: [
      {
        handle: "OpenAI",
        text: "We now train frontier models with no internet access and have tightened containment of training and evaluation environments after incidents including a model exploiting a DNS resolver misconfiguration.",
        url: "https://openai.com/index/",
      },
    ],
  },
  {
    id: "recursive-flint",
    topic: "Recursive Flint: lokalny open-weight MoE ~40B (2,5B active) do kodowania",
    posts: [
      {
        handle: "RichardSocher",
        text: "Flint is our first model — a fast local coding model that runs on a laptop. Our small team of people and agents built it from scratch in under four months with the Eureka Machine.",
        url: "https://techcrunch.com/2026/10/21/recursive-launches-flint-a-laptop-coding-model-it-says-was-largely-built-by-ai/",
      },
    ],
  },
  {
    id: "github-orca-trending",
    topic: "GitHub Trending: stablyai/orca (flota agentów Claude Code/Grok Bot), opencode, ruflo",
    posts: [
      {
        handle: "ainotesus",
        text: "Orca — a desktop app for running a fleet of coding agents at once, each in its own git worktree, so one prompt fans out across them and you merge the winner. Works with Claude Code, Codex, OpenCode, or any CLI agent.",
        url: "https://x.com/ainotesus/status/2113495785094447600",
      },
    ],
  },
  {
    id: "btc-81k",
    topic: "BTC konsoliduje się ~81,1–81,7 tys. USD po odpływie 635 mln USD z ETF",
    posts: [
      {
        handle: "CoinDesk",
        text: "Bitcoin steadies near $81,700 as altcoins rebound, Pepe climbs 13%. BTC rose 0.5% since midnight UTC, CoinDesk 80 +1.4%.",
        url: "https://www.coindesk.com/markets/2026/10/23/bitcoin-steadies-near-usd81-700-as-altcoins-rebound-pepe-climbs-13",
      },
    ],
  },
  {
    id: "claude-duet",
    topic: "Claude Duet: research preview proaktywnego agenta na Opus 5.5 dla Pro/Max",
    posts: [
      {
        handle: "AnthropicAI",
        text: "Introducing Claude Duet: a research preview where Claude works as a proactive agent. It runs in the background, checks connected apps, and asks before it sends, pays, or deletes.",
        url: "https://www.anthropic.com/news",
      },
    ],
  },
];
