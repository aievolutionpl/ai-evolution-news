import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "binance-withdrawals-resume",
    topic: "Binance: wypłaty wznowione po hacku ~6,3 mld USD; netto odpływ ~4,7 mld, pokrycie ~95% ze środków firmy",
    posts: [
      {
        handle: "binance",
        text: "Withdrawal data update\n\nBy 03:00 UTC, we are seeing hourly deposits exceed withdrawals, reflecting improving user activity and stabilizing flows.",
        url: "https://x.com/binance/status/2117494793446298084",
      },
    ],
  },
  {
    id: "anthropic-message-threads",
    topic: "Anthropic: message threads (public beta) w Messages API — długie sesje agentów bez resendowania pełnej historii, ~35% niższy median TTFT na 500k–1M",
    posts: [
      {
        handle: "ClaudeDevs",
        text: "Message threads are now in public beta on the Messages API.\n\nThe API caches your conversation on the server between turns, so instead of resending the full conversation, you send only new messages and the previous message ID, and Claude starts responding sooner.",
        url: "https://x.com/ClaudeDevs/status/2117332449382510884",
      },
    ],
  },
  {
    id: "claude-code-2-1-317",
    topic: "Claude Code 2.1.317 (3.11): poprawki background agentów (Ctrl+C nie zabija wszystkich), check przed wysyłaniem emaila, stabilność",
    posts: [
      {
        handle: "EthanAgentLab",
        text: "If you run background agents, pressing Ctrl+C to clear a half-typed prompt could stop all of them at once.\nThat's fixed in Claude Code 2.1.317, released today (Nov 3).\n\nThree more small fixes from the same release:\nRe-reading a file that hasn't changed now returns its content instead of a \"file unchanged since your last Read\" note.\nThe \"Resume this session with\" hint at exit now repeats your launch flags, such as --chrome --debug, ahead of --resume.\nIt now asks before a web or shell tool call sends your account email address to the network.\n\nTo get it: claude update",
        url: "https://x.com/EthanAgentLab/status/2117515682791526658",
      },
    ],
  },
  {
    id: "gemini-carbon-index",
    topic: "Google DeepMind: Gemini 4 Carbon nadal #1 na Artificial Analysis Intelligence Index v5 (~59); dostęp ograniczony (Fairwind)",
    posts: [
      {
        handle: "Google",
        text: "Introducing Gemini 4 Carbon, our latest frontier model.\n\nCarbon delivers improved performance across domains — ranking #1 on v5.0 of the @ArtificialAnlys Intelligence Index and sets a new state-of-the-art in cybersecurity and long-horizon capabilities.\n\nIt’s rolling out starting this week to cyber defenders through our Fairwind Program, with expanded access coming soon",
        url: "https://x.com/Google/status/2115489525765988776",
      },
    ],
  },
  {
    id: "claude-mem-trending",
    topic: "GitHub Trending: claude-mem (persistent context dla agentów: Claude Code, OpenClaw, Codex, Hermes) mocno rośnie; Hermes ~260k, OpenClaw ~393k",
    posts: [
      {
        handle: "thedotmack",
        text: "Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions.\nWorks with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More",
        url: "https://github.com/thedotmack/claude-mem",
      },
    ],
  },
  {
    id: "grok-bot-workflows",
    topic: "Grok Bot: użytkownicy łączą go z lokalnymi Codex/Claude Code i narzędziami do treści (Canva, Figma, Runway)",
    posts: [
      {
        handle: "alin_zone",
        text: "🎨 Grok Bot 做内容创作也够用了，海报、设计稿、生图生视频一条龙\n\n... 自带生图 / 生视频\n不用装插件。\n聊天里直接让它出图、出短视频...\n\n② Canva｜官方插件\n③ Figma｜官方插件\n④ Runway｜官方插件\n⑤ Gamma｜官方插件",
        url: "https://x.com/alin_zone/status/2117150182320013591",
      },
    ],
  },
  {
    id: "btc-post-hack-flows",
    topic: "Crypto po hacku Binance: BTC pod presją, ETF outflows, opcje na downside; wypłaty Binance stabilizują się (depozyty > wypłaty w godzinach)",
    posts: [
      {
        handle: "BitopexIO",
        text: "🗞️ Weekly Crypto News | 5 Stories Options Traders Should Watch\n\n1. Binance Hit by $6.3 Billion Crypto Hack\nThe breach triggered sharp market losses and aggressive BTC put buying...\n\n2. Bitcoin ETFs Record $643 Million in Outflows",
        url: "https://x.com/BitopexIO/status/2117515609432801553",
      },
    ],
  },
  {
    id: "openclaw-hermes-stars",
    topic: "Open-source agenci: OpenClaw (~393k gwiazdek) i Hermes Agent (~260k) nadal na czele; nowe wydania i integracje z Claude/Codex",
    posts: [
      {
        handle: "NousResearch",
        text: "Hermes Agent continues to grow as a self-improving personal agent. Latest releases add better backends, plugins and migration tools from other agents.",
        url: "https://github.com/NousResearch/hermes-agent",
      },
    ],
  },
];
