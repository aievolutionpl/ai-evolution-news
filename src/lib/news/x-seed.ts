import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "openai-dns-pause-2",
    topic: "OpenAI: druga pauza po ucieczce z sandboxu",
    posts: [
      {
        handle: "notjazii",
        text: "openai stopped training its most capable models as one of their models escaped sandbox and got access to internet during testing. team just published three reports: one agent reached an external chatbot through DNS; prompt injection that could copy itself like a worm; another model leaked a researcher github token into a public codex repo.",
        url: "https://x.com/notjazii/status/2103783183884095521",
      },
    ],
  },
  {
    id: "openai-fortune-sandbox",
    topic: "Fortune: agenci OpenAI znów wyszli z sandboxu",
    posts: [
      {
        handle: "SalvorKnows",
        text: "OpenAI pauses training a second time after saying its AI agents escaped a secure 'sandbox' again | Fortune",
        url: "https://x.com/SalvorKnows/status/2103927409854877696",
      },
    ],
  },
  {
    id: "grok-bot-finance",
    topic: "Grok Bot łączy się z finansami",
    posts: [
      {
        handle: "bot",
        text: "Grok Bot now connects to your finances. Link your bank, card, and investment accounts with the new Finance integration, then ask Bot to help manage your spending, investments, and more.",
        url: "https://x.com/bot/status/2103936247995752705",
      },
    ],
  },
  {
    id: "openai-assistant-o",
    topic: "DevDay: przeciek nazwy asystenta \u201eo\u201d",
    posts: [
      {
        handle: "notjazii",
        text: "openai’s new bot name may have leaked. looks like team is planning to call its always on assistant \"o\", their competitor to muse and grok bot. whoever came up with it needs to change it before official release on dev day.",
        url: "https://x.com/notjazii/status/2103759101109133322",
      },
    ],
  },
  {
    id: "hindsight-stars",
    topic: "GitHub: Hindsight +4,4k gwiazdek / 24h",
    posts: [
      {
        handle: "trending_repos",
        text: "Trending repository of the day: hindsight — Hindsight: Agent Memory That Learns. Last 24h: 4,463 stars. Total: 35,118. https://github.com/vectorize-io/hindsight",
        url: "https://x.com/trending_repos/status/2104181329386475658",
      },
    ],
  },
  {
    id: "hindsight-reflect",
    topic: "Hindsight: retain, recall, reflect",
    posts: [
      {
        handle: "stretchcloud",
        text: "Hindsight, an open-source memory system from Vectorize, picked up 4,463 GitHub stars in 24 hours. The pitch is three verbs: retain, recall, reflect. On LongMemEval it claims 91.4% with Gemini 3. Memory as separate networks for facts, experiences, observations, and opinions.",
        url: "https://x.com/stretchcloud/status/2104444744155713875",
      },
    ],
  },
  {
    id: "btc-etf-hold",
    topic: "BTC przy ~84,5k po 2,4 mld USD w ETF",
    posts: [
      {
        handle: "JackTradoor",
        text: "Bitcoin holds near $84.5k despite oil spiking 1.3% on Trump’s Iran rebuff and 10-year yields pushing 5.2%, while spot ETF inflows hit $2.4B for the week to flip YTD flows positive. Institutional buying is overriding the macro pressure that has historically weighed on risk assets.",
        url: "https://x.com/JackTradoor/status/2104451273114194155",
      },
    ],
  },
  {
    id: "claude-code-usage",
    topic: "Opus vs Codex: kto dostaje więcej użycia",
    posts: [
      {
        handle: "thoughtcrime___",
        text: "bro the $200 plans are not even close. i’m cancelling some of my codex subscriptions i think. you get so much more use out of opus. that was one of my main gripes with anthropic when fable came out. felt like i burned through it without getting any usage",
        url: "https://x.com/thoughtcrime___/status/2104453631231828143",
      },
    ],
  },
];
