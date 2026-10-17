import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "openai-rogue-june",
    topic: "OpenAI ujawnia kolejne 4 incydenty rogue agentów z czerwca (łącznie ~19)",
    posts: [
      {
        handle: "Shaarav_Raghu",
        text: "OpenAI disclosed four more rogue agent incidents from June, total now 19 (AIToolsRecap). My take: finding them months later is the real story.",
        url: "https://x.com/Shaarav_Raghu/status/2111299603425587248",
      },
      {
        handle: "rejaramadhan98",
        text: "4 more OpenAI rogue agent incidents disclosed this week. 73% of prod agent deployments carry prompt injection risk. One leaked key burned $100k/day in compute before anyone noticed. We ship agents faster than we learn to supervise them.",
        url: "https://x.com/rejaramadhan98/status/2111314255874273299",
      },
    ],
  },
  {
    id: "claude-quantum-circuits",
    topic: "Claude Mythos 5 projektuje lepsze obwody kwantowe (do 17× mniej gates)",
    posts: [
      {
        handle: "AnthropicAI",
        text: "New from our STEM Fellows Program: Designing more efficient quantum circuits with Claude. Given plain-language instructions, Claude Mythos 5 designed quantum circuits that improve on the best published ones, sometimes by an order of magnitude or more.",
        url: "https://x.com/AnthropicAI/status/2111152183240511640",
      },
      {
        handle: "rohanpaul_ai",
        text: "Claude Mythos 5 designed an elliptic-curve quantum circuit using 17x fewer gates for 12% more qubits. Andi Gu, a Harvard physics researcher, ran it through Anthropic’s STEM Fellows Program... Claude wrote circuit designs as code, an evaluator checked and scored them, and Claude kept revising until it beat human-designed records in most of the 8 tasks.",
        url: "https://x.com/rohanpaul_ai/status/2111162362464276907",
      },
    ],
  },
  {
    id: "btc-consolidate-815",
    topic: "BTC konsoliduje się ok. 81,5–81,6 tys. USD, odpływy ETF",
    posts: [
      {
        handle: "cryptoFoufi",
        text: "On est le samedi 17 octobre 2026. Le Bitcoin consolide au-dessus du coût moyen des ETF américains (81 500 $)... Check des prix de ce matin : Bitcoin : 81 558 $. ETF Bitcoin : -82.40 M$ (hier).",
        url: "https://x.com/cryptoFoufi/status/2111339785562345497",
      },
    ],
  },
  {
    id: "github-agent-skills",
    topic: "GitHub Trending: skills i harnessy agentów (rea, orca, ECC, scientific-agent-skills)",
    posts: [
      {
        handle: "themuscleai",
        text: "Build Log #6: five skill repos hit GitHub trending in one day. They're all selling the same thing. claude-plugins-official, scientific-agent-skills, affaan-m/ECC, obra/superpowers, ruvnet/ruflo. Five folders of SKILL.md files... Skills are becoming the package manager for coding agents.",
        url: "https://x.com/themuscleai/status/2111315783766720806",
      },
    ],
  },
  {
    id: "claude-code-speed",
    topic: "Claude Code: gzip konwersacji i szybszy start sesji cloud",
    posts: [
      {
        handle: "ClaudeDevs",
        text: "We keep improving performance across Claude, and you may have noticed it starts responding sooner! Claude Code now gzips the conversation it sends on every turn, so it reaches the model faster. Cloud sessions also start up as soon as you start typing.",
        url: "https://x.com/ClaudeDevs/status/2111209208012210409",
      },
    ],
  },
  {
    id: "grok-bot-multi-model",
    topic: "Grok Bot routuje zadania do Claude Code / Codex i innych modeli",
    posts: [
      {
        handle: "AndrewWarner",
        text: "You don't have to wait for Grok Bot to add Claude, OpenAI, etc. You can do it now. I did. Just ask your Grok Bot to connect to your AI subscriptions. How it'll do it: Opens a terminal on its own computer • Installs the Claude Code and Codex command-line tools • You sign in... From then on, it assigns work to other models. No API keys.",
        url: "https://x.com/AndrewWarner/status/2107930509284126970",
      },
    ],
  },
  {
    id: "hermes-openclaw-agents",
    topic: "Hermes Agent i OpenClaw nadal w centrum narzędzi agentów",
    posts: [
      {
        handle: "Saboo_Shubham_",
        text: "Claude Code, OpenClaw, and Hermes Agent can now share the same memory-and-skills layer. One portable .agent/ folder works across 8 coding agent harnesses. Switch tools without losing a single lesson. 100% Opensource.",
        url: "https://x.com/Saboo_Shubham_/status/2046473613105369468",
      },
    ],
  },
  {
    id: "agent-harnesses-graph",
    topic: "Wspólne grafy i harnessy dla Claude Code, Codex, Hermes",
    posts: [
      {
        handle: "Cotal_AI",
        text: "Loops or graphs? Why not any shape you can draw. Claude Code, Codex, OpenCode and Hermes on one live graph. They DM each other, spawn teammates, fan out builds and stop for your OK. Graph engineering for the agents you already use. Open source.",
        url: "https://x.com/Cotal_AI/status/2110848423893364770",
      },
    ],
  },
];
