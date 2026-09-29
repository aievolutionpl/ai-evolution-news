import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "sonnet-55",
    topic: "Anthropic: Claude Sonnet 5.5",
    posts: [
      {
        handle: "claudeai",
        text: "Introducing Claude Sonnet 5.5, the second model in the Claude 5.5 family. It’s a clear upgrade over Sonnet 5, runs more than 30% faster, and costs up to 30% less for most work.",
        url: "https://x.com/claudeai/status/2104633115620823187",
      },
    ],
  },
  {
    id: "anthropic-sonnet-avail",
    topic: "Sonnet 5.5 już w API i chmurach",
    posts: [
      {
        handle: "AnthropicAI",
        text: "Claude Sonnet 5.5 is now available.",
        url: "https://x.com/AnthropicAI/status/2104633259925630995",
      },
    ],
  },
  {
    id: "nvidia-agent-safety",
    topic: "Nvidia: Open Agent Safety Platform",
    posts: [
      {
        handle: "nvidia",
        text: "We’ve launched NVIDIA Open Agent Safety Platform to help people control what AI agents can access and do. NVIDIA OpenShell enforces permissions around the agent’s work. BlueField-4 and DOCA add independent monitoring outside the agent’s reach.",
        url: "https://x.com/nvidia/status/2104567031110533431",
      },
    ],
  },
  {
    id: "jensen-trust-layer",
    topic: "Huang: warstwa zaufania dla agentów",
    posts: [
      {
        handle: "JensenHuang",
        text: "Today, with over 100 industry partners, we introduced the NVIDIA Open Agent Safety Platform, bringing together OpenShell and Sentry. Safety is how trust is earned.",
        url: "https://x.com/JensenHuang/status/2104499465055023424",
      },
    ],
  },
  {
    id: "openai-astra",
    topic: "OpenAI: Astra poza październikowym slotem",
    posts: [
      {
        handle: "np_nationpress",
        text: "OpenAI cancels GPT-6.1 Astra release after safety tests flag scope failures. OpenAI has cancelled the October release of GPT-6.1 Astra after safety tests showed the AI model could exceed its authorised scope and misreport its own actions.",
        url: "https://x.com/np_nationpress/status/2104815776998068329",
      },
    ],
  },
  {
    id: "team-bots",
    topic: "xAI: Team Bots w publicznej betacie",
    posts: [
      {
        handle: "theaideskio",
        text: "JUST IN: xAI opened a public beta of Team Bots, shared Grok assistants that work alongside a team in Slack with access to shared files, credentials and memory while keeping each person’s conversations private.",
        url: "https://x.com/theaideskio/status/2104798354983076070",
      },
    ],
  },
  {
    id: "hindsight-40k",
    topic: "GitHub: Hindsight ~40k gwiazdek",
    posts: [
      {
        handle: "nazrielnr_",
        text: "Vectorize merilis Hindsight, sistem memori AI biomimetik. Raih skor 91.4% di LongMemEval dan tembus 40.000 GitHub stars. Repo: https://github.com/vectorize-io/hindsight",
        url: "https://x.com/nazrielnr_/status/2104727544398524647",
      },
    ],
  },
  {
    id: "btc-83k-etf",
    topic: "BTC ~83,4k; BlackRock dokupuje",
    posts: [
      {
        handle: "MacroAlphaHQ",
        text: "BLACKROCK ETF BUYS $54.8 MILLION OF BITCOIN. THE PURCHASE LANDS WHILE BTC TRADES NEAR $83,370.",
        url: "https://x.com/MacroAlphaHQ/status/2104814239990837455",
      },
    ],
  },
];
