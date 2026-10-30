import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "binance-hack-63b",
    topic: "Binance: incydent ~6,3 mld USD (największy w historii crypto), ~3 mld zamrożone, pokrycie z SAFU",
    posts: [
      {
        handle: "bitcoin2go",
        text: "🚨 Binance Hack: Was wir bisher wissen\n\nRund 6,3 Mrd. $ betroffen. Der größte Hack der Kryptogeschichte.\n\n1.) Einfallstor war der Laptop eines Binance Engineers. Laut Binance wurde kein Private Key geklaut.\n\n2.) Der Trick: EIP-7702. ...\n\n4.) Rund 3 Mrd. $ sind eingefroren. ...\n\n6.) Binance übernimmt alle Verluste. ...\n\nMarkt: 1,5 Mrd. $ liquidiert, BTC unter 77k, ETH unter 2.200 $.",
        url: "https://x.com/bitcoin2go/status/2116066559449763928",
      },
    ],
  },
  {
    id: "anthropic-ai-science-20",
    topic: "Anthropic: AI for Science rozszerzone o 20 partnerów (NSF, Sloan, Simons, FlyWire, AstroPath)",
    posts: [
      {
        handle: "AnthropicAI",
        text: "AI for Science expands to foundations and institutions. We’re highlighting 20 scientific foundations, institutions, and research groups... that we’ve partnered with in an expansion of our AI for Science program, which gives free Claude credits to researchers.",
        url: "https://www.anthropic.com/news/ai-for-science-expands-foundations-research-institutions",
      },
    ],
  },
  {
    id: "gemini-4-carbon",
    topic: "Google DeepMind: Gemini 4 Carbon — #1 Intelligence Index v5 (59), focus na cyber i long-horizon, dostęp dla defenderów",
    posts: [
      {
        handle: "Google",
        text: "Introducing Gemini 4 Carbon, our latest frontier model.\n\nCarbon delivers improved performance across domains — ranking #1 on v5.0 of the @ArtificialAnlys Intelligence Index and sets a new state-of-the-art in cybersecurity and long-horizon capabilities.\n\nIt’s rolling out starting this week to cyber defenders through our Fairwind Program, with expanded access coming soon",
        url: "https://x.com/Google/status/2115489525765988776",
      },
    ],
  },
  {
    id: "claude-code-2-1-314",
    topic: "Claude Code 2.1.314 (30.10): lepsza ochrona przed edycją poza projektem, enterprise controls, stabilność",
    posts: [
      {
        handle: "AugustiKn",
        text: "🛠️ Claude Code just got safer.\n\nAnthropic released Claude Code 2.1.314 on October 30.\n\nThe update brings:\n• Better protection against editing files outside project folders\n• Improved handling of long coding sessions\n• New enterprise access controls\n• Stability and performance fixes\n\nNo new model - just a more reliable AI coding agent.",
        url: "https://x.com/AugustiKn/status/2116066500519879091",
      },
    ],
  },
  {
    id: "gpt-terra-agents-cost",
    topic: "GPT-6.1 Terra (26.10): szybszy/tańszy agentic computer use vs Opus 5.5 na wielu taskach; AA Index Terra max ~48–51 vs Opus 58",
    posts: [
      {
        handle: "OpenAI",
        text: "GPT-6.1 Terra is rolling out now and is available to all Plus, Pro, Enterprise, and Edu users in ChatGPT Work and Codex. Developers can also access it through the OpenAI API as gpt-6.1-terra.",
        url: "https://x.com/OpenAI/status/2114780720170164735",
      },
    ],
  },
  {
    id: "hermes-openclaw-stars",
    topic: "GitHub: Hermes Agent (~259k) i OpenClaw (~393k) nadal na czele agent tools; Claude Code, Codex, Orca rosną",
    posts: [
      {
        handle: "ainotesus",
        text: "Orca — a desktop app for running a fleet of coding agents at once, each in its own git worktree... Works with Claude Code, Codex, OpenCode, or any CLI agent.",
        url: "https://x.com/ainotesus/status/2113495785094447600",
      },
    ],
  },
  {
    id: "grok-bot-local-agents",
    topic: "Grok Bot + lokalne Codex/Claude Code: użytkownicy łączą cloud + local runtimes na Mac Studio itp.",
    posts: [
      {
        handle: "chessxyz",
        text: "今天把自己的本地服务器提回来了：Mac Studio，M5 Max + 64GB 内存 + 1TB。\n\n准备配合 Grok Bot，在本地跑 Codex 和 Claude Code。\n\n... 交易策略和深度分析会调用本地的 Codex 和 Claude Code，Grok Bot 做统一入口。\n\n云端 + 本地 + VPS，三条腿走路。",
        url: "https://x.com/chessxyz/status/2116066344190005456",
      },
    ],
  },
  {
    id: "btc-post-hack-78k",
    topic: "BTC ~76–78,5 tys. USD po hacku Binance (30.10); liquidacje ~1,5 mld, ETF flows mieszane",
    posts: [
      {
        handle: "JoshMichalski",
        text: "Binance: \"We have found no evidence of any wallet private key leak.\"\n\nSo the keys held. One engineer's laptop did not.\n\nThat is the whole lesson. The weakest link is always a person. I hold my own Bitcoin.",
        url: "https://x.com/JoshMichalski/status/2116066539870822816",
      },
    ],
  },
];
