import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "anthropic-internet-off",
    topic: "Anthropic wyłącza live internet we wszystkich wewnętrznych ewaluacjach",
    posts: [
      {
        handle: "Jeremybtc",
        text: "Anthropic removed internet access from every one of its internal AI tests after Claude sent real police a fake murder tip. Anthropic published the report yesterday. One model found an unsolved homicide page online. It made up a tip and submitted it to Philadelphia police. The tip got flagged as spam and never reached investigators.",
        url: "https://x.com/Jeremybtc/status/2109676688959516982",
      },
    ],
  },
  {
    id: "karpathy-funnel",
    topic: "Karpathy: różnica w zrozumieniu AI to ostry lejek",
    posts: [
      {
        handle: "karpathy",
        text: "Dusting off this tweet from April because this gap in shared understanding of LLM capability is *widening*. It's now less \"two groups of people speaking past each other\" and more a sharp funnel. ~6B people (~75%) have barely come in contact with LLMs at all. Around 1-2B are casual users of free-tier products. ~20M see agents complete weeks/months of work with a prompt.",
        url: "https://x.com/karpathy/status/2109586382385566144",
      },
    ],
  },
  {
    id: "btc-volatility",
    topic: "BTC waha się 81–83,5 tys. USD, likwidacje >770 mln USD",
    posts: [
      {
        handle: "TheBlock__",
        text: "Bitcoin slides below $82,000 as crypto liquidations surge past $770 million. Crypto liquidations amounted to $771 million over the past 24 hours, including $685.6 million in long positions. BTC dropped 2.8% to $81,382.",
        url: "https://x.com/TheBlock__/status/2109800000000000000",
      },
    ],
  },
  {
    id: "gemini-agent",
    topic: "Google Gemini Agent: własny email i routing do Claude",
    posts: [
      {
        handle: "zhaocaihu37205",
        text: "前两天，Google 发布了 Gemini agent。你给它的是目标，不是步骤。它自己规划、自己调工具，Gmail、Drive、Docs、Slack 一把梭。最狠的是：任务自动路由到性价比最高的模型。Claude 也在调度名单里。",
        url: "https://x.com/zhaocaihu37205/status/2109887889735926060",
      },
    ],
  },
  {
    id: "dynamic-workflows",
    topic: "Dynamic Workflows: Claude Managed Agents i Devin do 1000 subagentów",
    posts: [
      {
        handle: "devindevelopers",
        text: "Dynamic workflows let Devin split a big job into pieces, hand each one to its own Devin, and bring the results back together. The plan for a Dynamic Workflow lives in code instead of an agent’s head, so you always know which Devins will run, in what order, and what each one is told.",
        url: "https://x.com/devindevelopers/status/2109887510184964285",
      },
    ],
  },
  {
    id: "claude-code-agents",
    topic: "Claude Code i Codex: agenci kodowania nadal w centrum",
    posts: [
      {
        handle: "konig0000",
        text: "Claude Code + GitHub is f...cking powerful. 7 open source repos turn it into a much stronger coding setup. 01 Claude Code, 02 Agent Skills, 03 Claude Code Plugins.",
        url: "https://x.com/konig0000/status/2109483168990695791",
      },
    ],
  },
  {
    id: "hermes-agent",
    topic: "Hermes Agent deleguje zadania do innych modeli",
    posts: [
      {
        handle: "KaganKongar",
        text: "Hermes agent is running. Claude Code is running. Hermes is delegating coding tasks to Muse Code. Claude Code is acting as an advisor, communicating with Hermes through an append only file.",
        url: "https://x.com/KaganKongar/status/2109556644627775859",
      },
    ],
  },
  {
    id: "github-trending-agents",
    topic: "GitHub Trending: rea, claude-mem i narzędzia agentów",
    posts: [
      {
        handle: "startupcorners",
        text: "GitHub Trending Recap: AI Agents, Code Tools, and Dev Infra. Today's GitHub trending charts are dominated by AI agent frameworks, code automation tools, and local-first alternatives. morluto/rea, langgenius/dify, openclaw/openclaw.",
        url: "https://startupcorners.com/digest/devtools-digest-2026-10-12",
      },
    ],
  },
];
