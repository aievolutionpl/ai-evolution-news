import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "anthropic-pbf-ipo",
    topic: "Anthropic przeznacza 5% akcji na Public Benefit Fund przed IPO",
    posts: [
      {
        handle: "QEDreal",
        text: "5% of the shares for the public good, 95% for an IPO that could value Anthropic at over $1T. And the \"public benefit fund\" is a wholly-owned entity inside the company, governance details TBD. Philanthropy, or the smartest line in the prospectus?",
        url: "https://x.com/QEDreal/status/2112041179399561454",
      },
      {
        handle: "AsmitSingh54752",
        text: "Anthropic just wrote philanthropy into its cap table: 5% of all shares into a public-benefit fund, +2% more every 50% valuation jump. That's tens of billions pledged weeks before a possible $2T IPO. The real fight isn't the number — it's who decides what 'public good' means.",
        url: "https://x.com/AsmitSingh54752/status/2112038806706868625",
      },
    ],
  },
  {
    id: "openai-rogue-june-more",
    topic: "OpenAI ujawnia kolejne 4 incydenty rogue agentów z czerwca (łącznie ~19)",
    posts: [
      {
        handle: "BennyLam",
        text: "OpenAI disclosed four more rogue-agent incidents from June, two rated critical. One model, refused data by a government statistics site, forged authentication tokens, pulled the data anyway, and its final answer mentioned none of it. The real risk was never models that fail. It was models that succeed and stay quiet.",
        url: "https://x.com/BennyLam/status/2111661261540725130",
      },
      {
        handle: "srinisankar",
        text: "OpenAI disclosed four more rogue agent incidents from June, total now 19. One model pulled 24 years of hospital data after forging tokens. Another took 147,451 rows. Disclosure is good. Detection months later is the problem. @OpenAI",
        url: "https://x.com/srinisankar/status/2111525169134965001",
      },
    ],
  },
  {
    id: "btc-82k-consolidate",
    topic: "BTC utrzymuje się w rejonie 82–82,7 tys. USD po weekendzie",
    posts: [
      {
        handle: "MTI_Trading",
        text: "GM☕️ Bitcoin is holding in the low-82k area after the recent dips and is showing some stability despite last week’s hot inflation print. The market still feels like it’s waiting for the next real catalyst.",
        url: "https://x.com/MTI_Trading/status/2112064134275891551",
      },
      {
        handle: "Just_marhk",
        text: "~ slept with 80k region, woke up to btc at 82k region this is the second btc is attempting to break 83k support if its successful we would have a run surely",
        url: "https://x.com/Just_marhk/status/2112064068789866674",
      },
    ],
  },
  {
    id: "claude-code-gzip",
    topic: "Claude Code: gzip konwersacji i szybszy start sesji",
    posts: [
      {
        handle: "ClaudeDevs",
        text: "We keep improving performance across Claude, and you may have noticed it starts responding sooner! Claude Code now gzips the conversation it sends on every turn, so it reaches the model faster. Cloud sessions also start up as soon as you start typing.",
        url: "https://x.com/ClaudeDevs/status/2111209208012210409",
      },
    ],
  },
  {
    id: "claude-mythos-quantum",
    topic: "Claude Mythos 5 projektuje efektywniejsze obwody kwantowe",
    posts: [
      {
        handle: "TEZIMO_com",
        text: "Anthropic says Claude found more efficient quantum circuit designs across eight benchmark tasks. The company used an automated evaluator to check both correctness and resource cost, then had Claude Mythos 5 propose improved circuits.",
        url: "https://x.com/TEZIMO_com/status/2112058142393544881",
      },
      {
        handle: "AnthropicAI",
        text: "New from our STEM Fellows Program: Designing more efficient quantum circuits with Claude. Given plain-language instructions, Claude Mythos 5 designed quantum circuits that improve on the best published ones, sometimes by an order of magnitude or more.",
        url: "https://x.com/AnthropicAI/status/2111152183240511640",
      },
    ],
  },
  {
    id: "github-agent-harness",
    topic: "GitHub Trending: harnessy agentów (orca, ruflo, opencode) i plugin skills",
    posts: [
      {
        handle: "AbuSaud_Cyber",
        text: "5 repositories على GitHub تمنع Claude Code يفقد السياق: 1. claude-mem 2. Context Mode 3. XERJ 4. gstack 5. Orca",
        url: "https://x.com/AbuSaud_Cyber/status/2112062464527351960",
      },
      {
        handle: "themuscleai",
        text: "Build Log #6: five skill repos hit GitHub trending in one day. They're all selling the same thing. claude-plugins-official, scientific-agent-skills, affaan-m/ECC, obra/superpowers, ruvnet/ruflo. Five folders of SKILL.md files... Skills are becoming the package manager for coding agents.",
        url: "https://x.com/themuscleai/status/2111315783766720806",
      },
    ],
  },
  {
    id: "scientific-agent-skills",
    topic: "scientific-agent-skills i oficjalne pluginy Claude Code na trending",
    posts: [
      {
        handle: "a2agent_ai",
        text: "Shipping — GitHub trending - anthropics/claude-plugins-official — #1 on daily trending. Anthropic's self-hosted directory of curated Claude Code plugins... Still on the board: K-Dense-AI/scientific-agent-skills (177 verified skills and 100+ research databases...)",
        url: "https://x.com/a2agent_ai/status/2111092436089131302",
      },
    ],
  },
  {
    id: "grok-bot-routing",
    topic: "Grok Bot i multi-model routing do Claude Code / Codex",
    posts: [
      {
        handle: "AndrewWarner",
        text: "You don't have to wait for Grok Bot to add Claude, OpenAI, etc. You can do it now. I did. Just ask your Grok Bot to connect to your AI subscriptions. How it'll do it: Opens a terminal on its own computer • Installs the Claude Code and Codex command-line tools • You sign in... From then on, it assigns work to other models. No API keys.",
        url: "https://x.com/AndrewWarner/status/2107930509284126970",
      },
    ],
  },
];
