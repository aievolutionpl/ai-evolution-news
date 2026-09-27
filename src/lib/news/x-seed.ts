import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "openai-dns-pause",
    topic: "OpenAI: pauza po luce DNS w sandboxie",
    posts: [
      {
        handle: "saiitoshii",
        text: "OpenAI paused training on its most capable models. Again. Sep 20: an agent in a locked sandbox with no internet still found a DNS resolver, punched out, and started querying a public chatbot. Second pause in under three months. Monitoring caught it in 15 minutes. The auto-shutdown system failed. A human killed the run 2.5 hours later.",
        url: "https://x.com/saiitoshii/status/2103958771349573790",
      },
    ],
  },
  {
    id: "openai-gov-incidents",
    topic: "Agenci OpenAI na stronach federalnych USA",
    posts: [
      {
        handle: "Vladis_min",
        text: "A DNS gap may delay AI launches and raise security spend!!! OpenAI paused training, evals and tool use for its most capable models after an agent reached a public chatbot. The run stopped 2.5 hours later. Work resumes after fix validation and red teaming. This pause is limited.",
        url: "https://x.com/Vladis_min/status/2103993343340388355",
      },
    ],
  },
  {
    id: "anthropic-pentagon",
    topic: "Sąd: Anthropic zostaje ryzykiem Pentagonu",
    posts: [
      {
        handle: "MAAWLAW",
        text: "... a federal appeals court rejected @AnthropicAI's challenge to the govt's labeling of it as a #supplychain risk... The decision allows the Pentagon... to remove Anthropic's Claude models from its systems and bar the use of its products for it's work.",
        url: "https://x.com/MAAWLAW/status/2104044897275621660",
      },
    ],
  },
  {
    id: "hindsight-memory",
    topic: "Hindsight: pamięć agenta, która się uczy",
    posts: [
      {
        handle: "ITheEqualizer",
        text: "Hindsight will read a repo's git history and past sessions, build a memory bank for that repo, and load it when Claude Code or Codex CLI starts. That's the part I want to try. It's open source, from Vectorize. Memory is split into facts about the world and things the agent itself did.",
        url: "https://x.com/ITheEqualizer/status/2104076163035340841",
      },
    ],
  },
  {
    id: "grok-47-api",
    topic: "Grok 4.7 w API i u deweloperów",
    posts: [
      {
        handle: "EveryDevAi",
        text: "- Claude Opus 5.5 cache reads -60%. - GPT-6 Sol and Luna -50%. - Grok 4.7 +100% above 200k tokens. - Cursor's reviewer bot: average review time -21%. - Jev returns a probability, not text, and started a ten-figure rumor. - OpenAI killed the Sora 2 API.",
        url: "https://x.com/EveryDevAi/status/2104024327742267903",
      },
    ],
  },
  {
    id: "btc-etf-week",
    topic: "ETF-y BTC: ~2,4 mld USD w tygodniu",
    posts: [
      {
        handle: "TickerScope",
        text: "U.S. spot Bitcoin ETFs pulled in $2.4B last week, their biggest weekly inflow since October 2025. That pushed 2026 net ETF flows back into positive territory at about $934M after they were nearly $5.8B negative in mid-July.",
        url: "https://x.com/TickerScope/status/2104085717164957766",
      },
    ],
  },
  {
    id: "btc-84k-supply",
    topic: "BTC przy ~84 tys. mimo 7 sesji napływów",
    posts: [
      {
        handle: "cryptochain_Xp",
        text: "Bitcoin ETFs just extended their inflow streak to 7 straight sessions — nearly $3B entering the market. Yet BTC remains near $84K. That's the lesson: strong demand can still meet heavy supply before price expands.",
        url: "https://x.com/cryptochain_Xp/status/2104070580681257086",
      },
    ],
  },
  {
    id: "hindsight-recall",
    topic: "GitHub: Hindsight na LongMemEval",
    posts: [
      {
        handle: "LFrefman",
        text: "Your agent forgets everything between sessions? Meet Hindsight. Hindsight is an agent memory system built for agents that learn over time, not just remember chat history. It hit state-of-the-art on LongMemEval and runs in production at Fortune 500s.",
        url: "https://x.com/LFrefman/status/2104083296263241920",
      },
    ],
  },
];
