import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "anthropic-formal-verification",
    topic: "Anthropic: Claude formalnie weryfikuje 123 biblioteki OSS-Fuzz na poziomie RISC-V",
    posts: [
      {
        handle: "AnthropicAI",
        text: "New on our Frontier Red Team blog: using Claude to formally verify software at large scale. Formal verification can prove that code is free of certain bugs, but historically it has only been feasible for small codebases (or required a lot of expert time). With AI models, however, this is beginning to change. In collaboration with @theoremlabs, we used Claude to prove security properties in over one hundred real-world open-source libraries over the span of a few weeks.",
        url: "https://x.com/AnthropicAI/status/2113390212911083894",
      },
    ],
  },
  {
    id: "agent-skills-aaif",
    topic: "Anthropic przekazuje Agent Skills do Agentic AI Foundation (Linux Foundation)",
    posts: [
      {
        handle: "AnthropicAI",
        text: "Today, we’re donating Agent Skills, the open standard that gives AI agents specialized knowledge and workflows, to the Agentic AI Foundation (AAIF). More than 70 agent platforms, including ChatGPT, Cursor, GitHub Copilot, and VS Code, have integrated Agent Skills since we published the standard in December 2025.",
        url: "https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation",
      },
    ],
  },
  {
    id: "openai-google-cloud",
    topic: "OpenAI modele i Codex agentic workflows na Google Cloud Model Garden",
    posts: [
      {
        handle: "OpenAI",
        text: "OpenAI models are coming to Google Cloud. We're bringing our frontier models and Codex agentic workflows to Google Cloud's Model Garden, so enterprises can use our technology where they already build.",
        url: "https://x.com/OpenAI/status/2112988118471295323",
      },
    ],
  },
  {
    id: "recursive-flint",
    topic: "Recursive Flint: lokalny open-weight model kodujący 40B (2,5B aktywnych), zbudowany z pomocą AI",
    posts: [
      {
        handle: "RichardSocher",
        text: "Flint is our first model — a fast local coding model that runs on a laptop. Our small team of people and agents built it from scratch in under four months with the Eureka Machine.",
        url: "https://techcrunch.com/2026/10/21/recursive-launches-flint-a-laptop-coding-model-it-says-was-largely-built-by-ai/",
      },
    ],
  },
  {
    id: "claude-duet",
    topic: "Claude Duet: research preview proaktywnego agenta dla Pro/Max",
    posts: [
      {
        handle: "AnthropicAI",
        text: "Introducing Claude Duet: a research preview where Claude works as a proactive agent. It runs in the background, checks connected apps, and asks before it sends, pays, or deletes.",
        url: "https://www.anthropic.com/news",
      },
    ],
  },
  {
    id: "btc-81k",
    topic: "BTC konsoliduje się w rejonie 81,5–81,8 tys. USD po próbie 85 tys.",
    posts: [
      {
        handle: "TaunusChris",
        text: "Tech-Aktien rutschen, Öl über 110 $, Bitcoin hält sich um 81.000 $. Wer Geld druckt und Energie verknappt, bekommt Inflation. Bitcoin kennt keine Notenbank und keine Ölkrise, nur 21 Millionen.",
        url: "https://x.com/TaunusChris/status/2113513976055447740",
      },
    ],
  },
  {
    id: "github-agent-harness",
    topic: "GitHub Trending: orca (flota agentów), ruflo, opencode i katalogi skills",
    posts: [
      {
        handle: "ainotesus",
        text: "Orca — a desktop app for running a fleet of coding agents at once, each in its own git worktree, so one prompt fans out across them and you merge the winner. Works with Claude Code, Codex, OpenCode, or any CLI agent.",
        url: "https://x.com/ainotesus/status/2113495785094447600",
      },
    ],
  },
  {
    id: "claude-code-releases",
    topic: "Claude Code 2.1.309 i Codex 0.164.0: poprawki sandbox i presets",
    posts: [
      {
        handle: "ClaudeDevs",
        text: "Claude Code 2.1.309: fixed sandboxed Bash on macOS/Linux, MCP config protections, and disabled server reconnect issues. Performance and reliability improvements continue.",
        url: "https://github.com/anthropics/claude-code",
      },
    ],
  },
];
