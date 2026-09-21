import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "plugin4shell",
    topic: "Plugin4Shell: RCE w czterech agentach kodujących",
    posts: [
      {
        handle: "Fathom_news",
        text: "Plugin4Shell exposed Claude Code, Codex, Copilot and Gemini to zero-click RCE. That makes approval prompts a poor substitute for patching agents with access to developer machines.",
        url: "https://x.com/Fathom_news/status/2101884673026646224",
      },
    ],
  },
  {
    id: "plugin4shell-versions",
    topic: "Łatki: Claude Code 2.1.179, Codex 0.146.0",
    posts: [
      {
        handle: "akashc777",
        text: "Plugin4Shell lesson: a pinned plugin SHA is not integrity. Check Claude Code 2.1.179+, Codex 0.146.0+, and turn off Copilot plugin auto-update until there is a fix.",
        url: "https://x.com/akashc777/status/2101881260423487581",
      },
    ],
  },
  {
    id: "gemini-irregular",
    topic: "Gemini wyszedł z testu Irregular do trzech firm",
    posts: [
      {
        handle: "Kroshan4k",
        text: "Google confirmed Gemini left its May test sandbox and accessed 3 real companies. During a cyber eval by Irregular, the model got live internet, mixed up a fictional target with a real firm of the same name, then guessed passwords / used public creds.",
        url: "https://x.com/Kroshan4k/status/2101918095191499084",
      },
    ],
  },
  {
    id: "antitrust-slowdown-suit",
    topic: "Pozew: rzekoma zmowa o spowolnieniu frontier AI",
    posts: [
      {
        handle: "harshkoohli",
        text: "BREAKING: Anthropic, OpenAI, SpaceXAI, and Google just got hit with a federal antitrust lawsuit. The claim: their CEOs publicly agreeing to pace the frontier was illegal coordination to slow AI progress. Filed in Northern District of California.",
        url: "https://x.com/harshkoohli/status/2101508400878100720",
      },
    ],
  },
  {
    id: "anthropic-accenture-eval",
    topic: "Anthropic + Accenture: ewaluacja za 1+1 mld USD",
    posts: [
      {
        handle: "AnthropicAI",
        text: "We're partnering with Accenture on independent evaluation of frontier AI—part of our recent commitment to embed evaluators at Anthropic. Both we and Accenture expect to invest at least $1 billion to build capacity in this area over the next five years.",
        url: "https://x.com/AnthropicAI/status/2101039819870937247",
      },
    ],
  },
  {
    id: "btc-81k",
    topic: "Bitcoin koło 81,3 tys. USD",
    posts: [
      {
        handle: "Edricbro",
        text: "$BTC 81000, 5 MIN LTF ANALYSIS! #Bitcoin was trading sideways today when it suddenly made a very nice move. Over the last 4 hours, it continued to rise by 4%, or nearly 3.5k.",
        url: "https://x.com/Edricbro/status/2101644563534512179",
      },
    ],
  },
  {
    id: "browserskill-agents",
    topic: "Tencent BrowserSkill: agent w zalogowanej przeglądarce",
    posts: [
      {
        handle: "probiex007",
        text: "Your AI agent can write code. But what if it could also use your real, already-logged-in browser? Tencent's BrowserSkill lets AI agents interact with your browser while you keep working. Cursor, Claude Code, Codex, OpenClaw, DeepSeek Harness and more.",
        url: "https://x.com/probiex007/status/2101920866087174288",
      },
    ],
  },
  {
    id: "gemini-38-live",
    topic: "Google: Gemini 3.8 Live w Search Live",
    posts: [
      {
        handle: "Google",
        text: "Real-time help is now even more intuitive and natural in Search Live — powered by Gemini 3.8 Live, our latest audio model.",
        url: "https://x.com/Google/status/2101042933650571469",
      },
    ],
  },
];
