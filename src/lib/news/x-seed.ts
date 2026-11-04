import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "binance-phase2-withdrawals",
    topic: "Binance: faza 2 wypłat od 4.11 04:00 UTC na 9 sieciach; netto odpływy spadły do ~2,57 mld USD",
    posts: [
      {
        handle: "BinanceHelpDesk",
        text: "Hi there. Withdrawals are being resumed gradually in stages. LTC is currently available for withdrawal via the BSC network...",
        url: "https://x.com/BinanceHelpDesk/status/2117878301855522817",
      },
    ],
  },
  {
    id: "claude-code-game-rules",
    topic: "Claude Code 2.1.317: poluzowana reguła przeciw klonom gier — nazwij tytuł jako opis, nie proś o kopię (Addy Osmani)",
    posts: [
      {
        handle: "addyosmani",
        text: "An update on building games with Claude Code:\n\nLast week some of you ran into Claude Code pushing back on game projects it should have just built. We'd added a short rule to the Opus 5.5 prompt to steer Claude away from recreating specific existing games, but it was also kicking in when you referenced one just to describe the mechanics you wanted.\n\nWe've updated that rule in 2.1.317. You can name a game to describe what you want and Claude should now build an original game in that genre. If you ask for a copy of the original, it'll offer to build something similar instead.",
        url: "https://x.com/addyosmani/status/2117848568535106001",
      },
    ],
  },
  {
    id: "grok-bot-phone-calls",
    topic: "Grok Bot: funkcja dzwonienia (live transcript + odpowiedzi w locie); demo oszczędności ~500 USD/rok na rachunku Comcast",
    posts: [
      {
        handle: "RoundtableSpace",
        text: "Grok Bot can now make phone calls for you, and Sawyer Merritt called the new feature \"very impressive.\"\n\nYou tell it who to call and why, and it handles the conversation. It shows a real-time transcript of the call. If it needs more info from you, a small answer box pops up where you type or select your response, and it relays that to the person on the phone.",
        url: "https://x.com/RoundtableSpace/status/2117878260671672323",
      },
    ],
  },
  {
    id: "btc-stabilizes-post-hack",
    topic: "BTC powyżej 77 tys. USD; przepływy Binance poprawiają się, ETF outflows ~27 mln 3.11 po ciężkich dniach",
    posts: [
      {
        handle: "BTC_Weijerman",
        text: "Binance just took a $6.3B hack. The largest in crypto history.\n\nBinance is covering the loss from its own reserves and reopened withdrawals within days. \n\n$4.6B went out in the first 10 hours.",
        url: "https://x.com/BTC_Weijerman/status/2117878153322365162",
      },
    ],
  },
  {
    id: "claude-mem-trending",
    topic: "GitHub Trending: claude-mem (persistent memory dla Claude Code/OpenClaw/Codex/Hermes) #1, +1k+ gwiazdek/dzień",
    posts: [
      {
        handle: "mushengziyue",
        text: "AI 助手最大的痛：聊完就忘。这个项目给它加「长期记忆」，下次接着干不用从头说。跑长任务的可以试试：\nhttps://github.com/thedotmack/claude-mem",
        url: "https://x.com/mushengziyue/status/2117876903378051303",
      },
    ],
  },
  {
    id: "openai-security-scrutiny",
    topic: "OpenAI pod lupą za bezpieczeństwo; zatrudniło firmę, która wcześniej badała Anthropic (Cathedral Systems)",
    posts: [
      {
        handle: "theneuron",
        text: "OpenAI faced fresh scrutiny over years of security warnings and brought in hackers who previously breached Anthropic; Google made schools choose between Search and AI; Apple warned about autonomous agents; and OpenAI demonstrated AI-designed hardware.",
        url: "https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-wednesday-november-4-2026/",
      },
    ],
  },
  {
    id: "hermes-openclaw-agents",
    topic: "Open-source agenci: Hermes Agent (~260k gwiazdek, local/Cloud) i OpenClaw (~394k) nadal dominują; nowe integracje",
    posts: [
      {
        handle: "grok",
        text: "Both. Hermes Agent is open-source and runs fully local on your machine or a VPS you control (with local/Docker/SSH backends). There’s also optional Hermes Cloud for fully managed always-on hosted agents via Nous Portal. The themes shown are for the local Desktop/CLI.",
        url: "https://x.com/grok/status/2117877995717214555",
      },
    ],
  },
  {
    id: "postman-plugins-agents",
    topic: "Postman cicho instaluje pluginy do Codex i Claude Code (hook trusted); użytkownicy sprawdzają konfiguracje",
    posts: [
      {
        handle: "btc2030100w",
        text: "有开发者发现，Postman 没打招呼就给 Codex 和 Claude Code 装了插件🤡🤡\n\n还加了个 hook，自己把状态改成 trusted\nCLI 和 MCP 配置也顺手塞进去了",
        url: "https://x.com/btc2030100w/status/2117878253465600012",
      },
    ],
  },
];
