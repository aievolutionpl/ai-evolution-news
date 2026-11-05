import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "openai-acquires-pierre",
    topic: "OpenAI nabywa Pierre Computer: Code Storage, Trees i Diffs dla Codex pozostają open-source",
    posts: [
      {
        handle: "grok",
        text: "Pierre Computer Company 是一家2023年成立的开发者工具初创公司，总部位于旧金山。他们打造开源工具（如Diffs代码审查、Trees文件浏览、Highlights语法高亮）和Code Storage（面向AI代理的Git存储服务）。这些工具已用于OpenAI的Codex，此次收购旨在加强AI协作编程能力。",
        url: "https://x.com/grok/status/2118241188637491597",
      },
    ],
  },
  {
    id: "meta-acquires-conductor",
    topic: "Meta kupuje Conductor – platformę równoległych agentów kodujących (Claude Code, Codex, Cursor)",
    posts: [
      {
        handle: "techcrunch",
        text: "Meta has acquired Conductor, an AI coding startup that allows users to spin up software projects by deploying multiple agents into parallel workspaces.",
        url: "https://techcrunch.com/2026/11/04/meta-acquires-ai-coding-startup-conductor/",
      },
    ],
  },
  {
    id: "claude-code-subagent-cost",
    topic: "Claude Code: status updates subagentów tła ok. 99% taniej dzięki Haiku 5.5 z notatek",
    posts: [
      {
        handle: "ClaudeDevs",
        text: "Background subagent status updates now cost about 99% less. Haiku 5.5 writes them from short notes instead of re-reading the whole conversation.",
        url: "https://x.com/ClaudeDevs",
      },
    ],
  },
  {
    id: "binance-withdrawals-progress",
    topic: "Binance: wypłaty SOL otwarte, stopniowe przywracanie innych sieci po hacku",
    posts: [
      {
        handle: "BinanceHelpDesk",
        text: "Hello there. SOL withdrawals are currently open. You can confirm the status on this page: https://accounts.binance.com/en/login?return_to=aHR0cHM6Ly93d3cuYmluYW5jZS5jb20vZW4vbXkvd2FsbGV0L2FjY291bnQvbWFpbi93aXRoZHJhd2FsL2NyeXB0by9TT0w=",
        url: "https://x.com/BinanceHelpDesk/status/2118241195591930117",
      },
    ],
  },
  {
    id: "btc-etf-flows",
    topic: "BTC ~77-78k USD; po serii odpływów ETF pierwsze sygnały napływów 4.11",
    posts: [
      {
        handle: "coinzonia",
        text: "📊 Günlük ETF Verileri \n\n4 Kasım'da spot Bitcoin ETF’lerine 74,57 milyon dolarlık net giriş gerçekleşti. Spot Ethereum ETF'leri de aynı dönemde 53,02 milyon dolarlık net para girişi kaydetti.",
        url: "https://x.com/coinzonia/status/2118240648855974073",
      },
    ],
  },
  {
    id: "claude-mem-trending",
    topic: "GitHub Trending: claude-mem (persistent memory dla Claude Code/OpenClaw/Codex/Hermes) nadal wysoko",
    posts: [
      {
        handle: "mushengziyue",
        text: "AI 助手最大的痛：聊完就忘。这个项目给它加「长期记忆」，下次接着干不用从头说。跑长任务的可以试试：\nhttps://github.com/thedotmack/claude-mem",
        url: "https://x.com/mushengziyue/status/2117876903378051303",
      },
    ],
  },
  {
    id: "hermes-openclaw",
    topic: "Open-source agenci: Hermes Agent (~260k gwiazdek) i OpenClaw nadal dominują GitHub",
    posts: [
      {
        handle: "grok",
        text: "Both. Hermes Agent is open-source and runs fully local on your machine or a VPS you control (with local/Docker/SSH backends). There’s also optional Hermes Cloud for fully managed always-on hosted agents via Nous Portal.",
        url: "https://x.com/grok/status/2117877995717214555",
      },
    ],
  },
  {
    id: "grok-bot-agents",
    topic: "Grok Bot i integracje z innymi agentami (Claude Code, Codex); użytkownicy budują cross-bot workflows",
    posts: [
      {
        handle: "telegraphic_dev",
        text: "Not yet, I'm building https://a2a.exposed for exactly these use cases of cross-bot co-operation but I haven't got access to Dots yet. Would be great if someone with the access like you can give it a try. So far I'm eating my own dog's food and all the development is made by my Grok Bot and my @OpenBot_ messaging to each other.",
        url: "https://x.com/telegraphic_dev/status/2118241249224192281",
      },
    ],
  },
];
