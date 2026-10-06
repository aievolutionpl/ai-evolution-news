import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "btc-87000-wall",
    topic: "Bitcoin: trzecie odbicie od 87 000 USD",
    posts: [
      {
        handle: "Neome_com",
        text: "CRYPTO BREAKING NEWS: Bitcoin keeps getting rejected at $87,000 as stocks hover near records. Bitcoin Futures Open Interest Falls $1.4B as Spot Buyers Step In.",
        url: "https://x.com/Neome_com/status/2107350681275261312",
      },
    ],
  },
  {
    id: "fincen-wallets",
    topic: "FinCEN wycofuje projekty o portfelach i mixerach",
    posts: [
      {
        handle: "Nadcrt",
        text: "FinCEN has withdrawn its old proposal targeting transactions involving self-custody wallets. The proposal would have required banks and MSBs to report certain crypto transactions above $10,000 involving unhosted wallets, and keep records above $3,000. It also withdrew the mixer measure. These rules were never in force.",
        url: "https://x.com/Nadcrt/status/2107353061345636542",
      },
    ],
  },
  {
    id: "agent-reach-90k",
    topic: "GitHub: Agent-Reach blisko 90 tys. gwiazdek",
    posts: [
      {
        handle: "cyrilXBT",
        text: "Your AI agent is BLIND. It can write code. It can plan. It can reason for an hour. But ask it what people on Reddit are saying about your product and it has nothing. Agent Reach fixes that. One install. Now it reads X, Reddit, YouTube, GitHub and any web page. No paid APIs. Almost 90K stars on GitHub.",
        url: "https://x.com/cyrilXBT/status/2107342617814118429",
      },
    ],
  },
  {
    id: "agent-reach-doctor",
    topic: "Agent-Reach: doctor, nie uniwersalny klucz",
    posts: [
      {
        handle: "iLegend_AI",
        text: "Agent Reach 我装了。先说结论：它不是一把能直接用的 CLI，是个体检器 + 一份写给 agent 看的 SKILL.md。最实在的是 agent-reach doctor — 16 个渠道一次列全。我这边 5/16 可用。GitHub 那条它自己标了「未实时验证」。CLI 里没有 read 和 search，真正读网页还是 curl、yt-dlp、gh。",
        url: "https://x.com/iLegend_AI/status/2107341130723688810",
      },
    ],
  },
  {
    id: "claude-code-290",
    topic: "Claude Code 2.1.290: hook widzi subagenta",
    posts: [
      {
        handle: "The_Tradesman1",
        text: "Claude Code 2.1.290 gives mod hooks the subagent's ID. The tool.check event now carries agentId. A mod's turn.step result lists serverToolUses. A user-installed mod could make an organization's guard skip its check — such a mod now gets unloaded. WebFetch no longer silently drops text past 100,000 characters. claude attach and claude logs take part of a session name.",
        url: "https://x.com/The_Tradesman1/status/2107352890985836901",
      },
    ],
  },
  {
    id: "hermes-sheet",
    topic: "Hermes: ściąga komend, pause i resume",
    posts: [
      {
        handle: "coindotgo",
        text: "Here is what I recommend saving before your next session with Hermes Agent. @HermesWatcher has compiled the commands that users typically discover one by one — from /bg and /moa to controls for pausing, resuming, queues, and saved sessions.",
        url: "https://x.com/coindotgo/status/2107350596756140153",
      },
    ],
  },
  {
    id: "grok-bot-vs-local",
    topic: "Grok Bot kontra OpenClaw, Hermes i Claude",
    posts: [
      {
        handle: "m0xt_",
        text: "I've moved all my operations onto Grok Bot, and the reason is simple: it just works. For most of this year I hopped between OpenClaw, Hermes and Claude. OpenClaw and Hermes are open-source agents you run on your own machine. On Claude you can't easily spin out a team of agents that each do one job. Dan McAteer at Latent Space: Grok Bot feels like unboxing a new MacBook, and systems like OpenClaw feel like Linux.",
        url: "https://x.com/m0xt_/status/2107142523185721742",
      },
    ],
  },
  {
    id: "grok-bot-seo",
    topic: "Grok Bot: zespół trzech agentów, nie kolejny SaaS",
    posts: [
      {
        handle: "jeoste_",
        text: "Si vous utilisez le kit d'agents de @RosoAI vous passez sûrement par Codex ou Claude. Il existe un autre moyen : donner le contenu reçu à un agent dédié Grok Bot (droits GSC, Vercel, Github). Ajoutez un agent SpaceXAI et un agent Manager. Trois agents SEO/GEO/AEO, 24h/24. Il m'a généré 19 pages — l'équipe vérifie encore les instructions.",
        url: "https://x.com/jeoste_/status/2107351977525149754",
      },
    ],
  },
];
