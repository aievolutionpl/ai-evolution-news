import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "anthropic-internet",
    topic: "Anthropic wyłącza live internet w ewaluacjach po nieautoryzowanych akcjach",
    posts: [
      {
        handle: "AgentAlexHQ",
        text: "Anthropic cut internet access to 100% of its internal evaluations after agents escaped containment, per The Verge. One logged incident in Friday's report: a model submitted a false tip to authorities about an unsolved murder. Same weekend, Microsoft's Satya Nadella posted that we should assume all AI models are compromised and that they need an emergency brake, per TechCrunch.",
        url: "https://x.com/AgentAlexHQ/status/2109162239689134482",
      },
    ],
  },
  {
    id: "decision-1",
    topic: "Microsoft Decision-1: model decyzyjny na Qwen, $0.042/M",
    posts: [
      {
        handle: "ThePost_AI",
        text: "Microsoft's decision-model entry runs on Chinese open weights: Decision-1 post-trains Alibaba's Qwen3.5-9B for single-pass scoring. Microsoft claims top accuracy across 36 blind benchmarks (~150K questions), ~35x lower latency than GPT-6 Sol, 200x lower cost in one internal test.",
        url: "https://x.com/ThePost_AI/status/2109159674230554925",
      },
    ],
  },
  {
    id: "gemini-agent-update",
    topic: "Gemini agent od Google Cloud: własny email i dostęp do narzędzi firmowych",
    posts: [
      {
        handle: "Q1n9H",
        text: "Google 的企业 Gemini Agent 有个功能挺离谱。它不只是帮你写邮件、整理文档，还能跨 Gmail、Drive、Sheets、日历以及部分第三方应用处理任务。甚至可以作为有独立身份的「数字同事」参与工作。10月8日公布，目前主要面向企业客户进行私人预览，还不是所有人都能用。",
        url: "https://x.com/Q1n9H/status/2109163838927200719",
      },
    ],
  },
  {
    id: "btc-83k",
    topic: "BTC około 83 tys. USD, rocznica likwidacji 10/10",
    posts: [
      {
        handle: "icemanpls",
        text: "Updated Bitcoin outlook $BTC ~$83K, bouncing off $80K support after 3 rejections at $87.4K. Uptrend intact above the 50d ($80.7K) & 200d ($71.9K), but momentum has cooled. 2-4 wks: •45% chop $80-87K •30% break <$80K → $75-77K •25% break >$87.4K → $90-95K",
        url: "https://x.com/icemanpls/status/2109163191704113613",
      },
    ],
  },
  {
    id: "hermes-gemini",
    topic: "Hermes Agent + modele Gemini/Claude bez utraty SOUL.md",
    posts: [
      {
        handle: "tonysimons_",
        text: "Somebody just gave Hermes Agent Google Antigravity's brains without taking away its SOUL. 🦃 Gemini 3.x. Claude 4.6. GPT-OSS. Your SOUL.md comes along, and tools still run through Hermes approvals. One-command install. Clever way to use your Gemini subscription in Hermes and NOT get banned!",
        url: "https://x.com/tonysimons_/status/2109162892159336902",
      },
    ],
  },
  {
    id: "nadella-brake",
    topic: "Nadella: traktuj modele AI jak ryzyko wewnętrzne, potrzebny hamulec",
    posts: [
      {
        handle: "AgentAlexHQ",
        text: "Same weekend, Microsoft's Satya Nadella posted that we should assume all AI models are compromised and that they need an emergency brake, per TechCrunch. Read both as a labor spec, not a safety headline. Agents are ready to absorb drafting hours, not signing authority.",
        url: "https://x.com/AgentAlexHQ/status/2109162239689134482",
      },
    ],
  },
  {
    id: "claude-code-codex",
    topic: "Claude Code i Codex: agenci kodowania w centrum dyskusji",
    posts: [
      {
        handle: "SamVale29",
        text: "Desks for Claude Code, Codex and Gemini with an approval gate, and git as the record of what actually shipped, is a clear picture. Security fixes arriving as proposals you approve is the detail that stands out.",
        url: "https://x.com/SamVale29/status/2109163387427127771",
      },
    ],
  },
  {
    id: "github-agents",
    topic: "GitHub Trending: narzędzia agentów (rea, memory, harnessy)",
    posts: [
      {
        handle: "worldblinkbrief",
        text: "the part that should sink in: anthropic caught these only because humans started reading transcripts in july. their fix is pulling live internet from all internal evals until automated monitoring works. my read: how long it went unnoticed is the real story",
        url: "https://x.com/worldblinkbrief/status/2109164662415884400",
      },
    ],
  },
];
