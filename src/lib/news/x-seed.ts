import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "haiku-55",
    topic: "Anthropic: Claude Haiku 5.5, średnio ~75% taniej niż 4.5",
    posts: [
      {
        handle: "claudeai",
        text: "Introducing Claude Haiku 5.5: the cheapest, fastest, and most capable small model we’ve ever released. On average, it costs around 75% less to run than Claude Haiku 4.5.",
        url: "https://x.com/claudeai/status/2107894039626277339",
      },
    ],
  },
  {
    id: "sonnet-cache-cut",
    topic: "Sonnet 5.5: odczyt cache przecięty do 0,10 USD za milion",
    posts: [
      {
        handle: "claudeai",
        text: "One more thing: we’re halving the price of cache reads on Claude Sonnet 5.5, to $0.10 per million tokens. That makes Sonnet 5.5 around 20% cheaper to run on most long-running work.",
        url: "https://x.com/claudeai/status/2107894060229034197",
      },
    ],
  },
  {
    id: "nous-series-b",
    topic: "Nous Research: seria B na Hermesa, wycena z WSJ",
    posts: [
      {
        handle: "NousResearch",
        text: "As reported in the @WSJ, we have raised a Series B to bring Hermes Agent to new frontiers (and, yes, build a mobile app). Thank you to our investors including @nvidia @M12vc @SamsungNext @robotventures @usv @ycombinator @MenloVentures, among others.",
        url: "https://x.com/NousResearch/status/2107874963382538469",
      },
    ],
  },
  {
    id: "hermes-windows-mxc",
    topic: "Hermes na liście agentów pod piaskownicę Windows MXC",
    posts: [
      {
        handle: "witcheer",
        text: "Hermes Agent on the Windows agent setup screen, rated E for Everyone. Microsoft also lists Hermes Agent among the agents adding support for MXC, its new sandbox for agents on Windows.",
        url: "https://x.com/witcheer/status/2108076090828738644",
      },
    ],
  },
  {
    id: "claude-code-fable-lead",
    topic: "Claude Code: Fable jako tech lead, Opus jako subagent",
    posts: [
      {
        handle: "dotey",
        text: "把任务发给 Fable 让它安排 SubAgent（Opus）去执行，它负责分析、编排和验收。所以大部分时间它都在等 subagent 执行……有点像 Fable 就是个 Tech Lead 的角色，专门帮你派活，还帮你验收。我现在已经不限制用 1M 上下文了，设置了最大上下文是 300K：/autocompact 300k。当然这样用比只用 Opus 5.5 还是费不少。",
        url: "https://x.com/dotey/status/2108072320317145306",
      },
    ],
  },
  {
    id: "btc-etf-oct7",
    topic: "Relacje o odpływie ze spot ETF BTC za 7 października",
    posts: [
      {
        handle: "MookieNFT",
        text: "~$487,000,000 worth of $BTC left spot ETFs yesterday. That's the biggest daily outflow since June 25. BlackRock: -$207.67M. Fidelity: -$105.15M. Ark: -$101.71M. Grayscale: -$39.29M. Every fund that had flows was red and $BTC fell to $83K.",
        url: "https://x.com/MookieNFT/status/2108068848058691598",
      },
    ],
  },
  {
    id: "openrouter-open-share",
    topic: "OpenRouter: udział otwartych modeli według jednego zestawienia",
    posts: [
      {
        handle: "AruNi_Lu",
        text: "last week of September, DeepSeek ran more tokens on OpenRouter than OpenAI, Google, Anthropic and xAI combined. open models went from ~33% of token traffic in late 2025 to ~67% now. when one agent run burns millions of tokens, price per token stops being a footnote. it's a product decision.",
        url: "https://x.com/AruNi_Lu/status/2108078751242461200",
      },
    ],
  },
  {
    id: "grok-bot-week",
    topic: "Grok Bot: tygodniowy dziennik użytkownika, nie komunikat xAI",
    posts: [
      {
        handle: "karanC_12",
        text: "The Grok Bot team is shipping faster than I can test. Grok Bot, last 10 days. Sep 28: Team Bots, shared memory. Oct 1: suggests work before you ask. Oct 6: changelog goes public. Oct 7: best model for the job — Opus, Midjourney, Suno. Oct 7, 0.68.1: PowerPoint or Google Slides, email from the draft card, faster computer use at 1920×1200. Oct 7 night: reads and monitors X, no connector.",
        url: "https://x.com/karanC_12/status/2108067770982338910",
      },
    ],
  },
];
