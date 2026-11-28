import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "claude-sabotage-claims",
    topic: "Zarzuty o sabotowanie bada\u0144 ML przez Claude: wirusowe w\u0105tki, Anthropic zaprzecza",
    posts: [
      {
        handle: "Youssofal_",
        text: "Claude Opus & Fable put a bunch of code that sabotaged our live ops and cost us tens of thousands. ... It hid 87% of revenue from ad networks, then flat-out refused my order to fix it.",
        url: "https://x.com/Youssofal_/status/2126426349632102753",
      },
      {
        handle: "rSanti97",
        text: "1. Claude is not trained to silently sabotage work. 2. Fable 5 degraded responses on specific LLM research for two days in June. This was obviously a huge mistake...",
        url: "https://x.com/rSanti97/status/2126527283456573456",
      },
    ],
  },
  {
    id: "btc-59700-etf-539b",
    topic: "BTC ~59,7 tys. USD, rekordowe odp\u0142ywy ETF ~5,39 mld USD w listopadzie",
    posts: [
      {
        handle: "CryptoChartSage",
        text: "\ud83d\udcc9 BTC & ETH spot ETFs continue heavy outflows Bitcoin ETFs: \u2212$389M yesterday (8th straight day) Largest: BlackRock IBIT \u2212$327M",
        url: "https://x.com/CryptoChartSage/status/2126575962963992966",
      },
      {
        handle: "MOE_DE1",
        text: "Die Wall Street feiert die beste Woche seit \u00fcber einem Jahr doch #Bitcoin k\u00e4mpft weiter mit der $60k-Marke. Gestern flossen wieder $389 Mio. aus US-Spot-ETFs ab, vor allem aus BlackRocks IBIT.",
        url: "https://x.com/MOE_DE1/status/2126576045063336198",
      },
    ],
  },
  {
    id: "claude-code-21332-mcp-skills",
    topic: "Claude Code 2.1.332: skille z MCP (beta) jako server:skill, PreSkillShellCommand hook",
    posts: [
      {
        handle: "ClaudeCodeLog",
        text: "Claude Code 2.1.332 has been released. 150 CLI changes... \u2022 Skills hosted on MCP servers (beta) show as server:skill in the / menu",
        url: "https://x.com/ClaudeCodeLog/status/2125406441796206946",
      },
      {
        handle: "Nonosam2",
        text: "\ud83d\udea8Claude Code users Claude Code just got a feature that deserves more attention. MCP servers can now provide their own skills. Update to v2.1.332",
        url: "https://x.com/Nonosam2/status/2125832092499992754",
      },
    ],
  },
  {
    id: "claude-ship-pr-agents",
    topic: "Claude Ship (beta): agenci review, fix i approve PR-\u00f3w na GitHub (Team/Enterprise)",
    posts: [
      {
        handle: "AnthropicAI",
        text: "Introducing Claude Ship. Claude can now review pull requests, fix them, and approve the ones that a team's policy allows.",
        url: "https://claude.com/resources/articles/introducing-claude-ship",
      },
      {
        handle: "techcrunch",
        text: "Anthropic launches Claude Ship, letting AI agents review, fix, and approve code changes",
        url: "https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/",
      },
    ],
  },
  {
    id: "hermes-ecc-github-stars",
    topic: "GitHub: ECC ~312k stars, Hermes Agent ~267k, deepseek-harness ~288k",
    posts: [
      {
        handle: "ai_dvirbi",
        text: "The most-starred AI agent repositories on GitHub: 1. affaan-m/ECC 311,967 stars 2. deepseek-ai/deepseek-harness 288,118 3. NousResearch/hermes-agent 266,621",
        url: "https://ai.dvirbi.com/en/repos/agents",
      },
      {
        handle: "Manorgw",
        text: "GitHub \u4e0a\u6709\u4e2a\u72c2\u63fd 2.3 \u4e07 Star \u7684\u9879\u76ee\uff0c\u76f4\u63a5\u628a AI \u7f16\u7a0b Agent \u585e\u8fdb\u5b89\u5353\u624b\u673a... \u57fa\u4e8e DeepSeek Harness \u6253\u9020",
        url: "https://x.com/Manorgw/status/2126564999720313064",
      },
    ],
  },
  {
    id: "codex-gpt62-quota-fix",
    topic: "Codex: poprawka billing GPT-6.2, quota szybciej si\u0119 ko\u0144czy (Astra +40%, Sol +25%)",
    posts: [
      {
        handle: "maxassistant",
        text: "Tibo, Codex lead, confirmed the GPT-6.2 billing mistake: after the fix, quota runs out 40% faster on GPT-6.2 Astra and 25% faster on Sol",
        url: "https://maxassistant.app/en/news/releases/ai-radar-2026-11-26/",
      },
      {
        handle: "Shin2079",
        text: "\u3082\u3068\u3082\u3068codex\u306esol\u306f\u30bb\u30f3\u30b7\u30c6\u30a3\u30d6\u306a\u5185\u5bb9\u306e\u30b3\u30fc\u30c9\u30ec\u30d3\u30e5\u30fc\u3067\u3082\u3001\u307b\u307c\u307b\u307c\u62d2\u5426\u3055\u308c\u306a\u3044\u304b\u3089\u3042\u3093\u307e\u308a\u56f0\u3063\u3066\u306a\u3044\u3051\u3069\u3001\u3082\u3057\u3082\u306e\u6642\u7528\u306b\u624b\u672d\u306b\u52a0\u3048\u3066\u304a\u304f",
        url: "https://x.com/Shin2079/status/2126575932316193197",
      },
    ],
  },
  {
    id: "agent-overengineering-meme",
    topic: "Mem o over-engineeringu przez Claude: bot tradingowy z 140k linii zamiast jednej poprawki",
    posts: [
      {
        handle: "frontier_rat_",
        text: "Fixing a bug in your trading bot in 2026: Tell Claude... +14,212 lines... repo is now 140,000 lines... const USDC_DECIMALS = 18;",
        url: "https://x.com/frontier_rat_/status/2126575893858632169",
      },
      {
        handle: "chasebrignac",
        text: "I think Anthropic is missing the point with their response basically brushing it off. People should decide what AI does, not Anthropic.",
        url: "https://x.com/chasebrignac/status/2126575927413166558",
      },
    ],
  },
  {
    id: "github-trending-superpowers",
    topic: "Szybki wzrost: obra/superpowers +5,4k stars w tydzie\u0144, orca, ARTEX",
    posts: [
      {
        handle: "whatstrending",
        text: "Fastest-growing AI agent repos, November 2026: obra/superpowers +5,471 stars from 2026-11-21 to 2026-11-28",
        url: "https://whatstrending.ai/repos/topics/ai-agents",
      },
      {
        handle: "stablyai",
        text: "Orca lets you run a fleet of bots with your own subscription (e.g. Claude Code, Grok, Agy, Codex).",
        url: "https://github.com/stablyai/orca",
      },
    ],
  },
];
