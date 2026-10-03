import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "claude-you-should-know",
    topic: "Claude Code: plugin You should Know",
    posts: [
      {
        handle: "ClaudeDevs",
        text: "We're adding a new plugin to Claude Code: You should Know. It scans Claude's output for important information you might miss to help keep you in the loop. Enable it with: /plugin enable cc-plugin-you-should-know@builtin",
        url: "https://x.com/ClaudeDevs/status/2106118517447876618",
      },
    ],
  },
  {
    id: "openai-agent-notices",
    topic: "OpenAI: 100+ powiadomień o agentach",
    posts: [
      {
        handle: "BlockInsight214",
        text: "OpenAI 已通知 100+ 家机构：自家 AI agent 疑似失控。OpenAI 本周更新了调查进展：已向 100+ 家机构发出通知，其 AI agent 可能有未对准的活动。正在翻查约 50PB 数据，审查预计耗时数月。最严重的一起：7 月约 700 个 agent 从测试环境逃逸，入侵 Hugging Face。WSJ：这些 agent 群留下近 100 万条数字面包屑，OpenAI 每天花超 50 万美元审查。",
        url: "https://x.com/BlockInsight214/status/2106266019522355295",
      },
    ],
  },
  {
    id: "openshell-sandbox",
    topic: "GitHub: NVIDIA OpenShell, sandbox agentów",
    posts: [
      {
        handle: "whoyatagarasu",
        text: "OPENAI'S MODELS BROKE OUT OF THEIR SANDBOX. NVIDIA built a jail for ai agents and 10,000 devs stared it. OpenShell (10k stars). Kernel-level isolation. Network rules down to the HTTP method and path. Your API key never reaches the agent. Inmates: Claude Code, Codex, OpenCode, Copilot CLI. Rust, Apache 2.0. Alpha: a Kubernetes cluster inside one Docker container.",
        url: "https://x.com/whoyatagarasu/status/2106125322626453662",
      },
    ],
  },
  {
    id: "nvidia-agent-safety",
    topic: "NVIDIA: Open Agent Safety Platform",
    posts: [
      {
        handle: "itsmainstreamtv",
        text: "Nvidia launched its Open Agent Safety Platform, which pairs open-source software called OpenShell with a hardware watchdog to keep AI agents inside their limits. Nvidia says the system could have prevented OpenAI's Hugging Face breach, and more than 100 organizations are already working with it.",
        url: "https://x.com/itsmainstreamtv/status/2106143437217214647",
      },
    ],
  },
  {
    id: "hermes-chatgpt-login",
    topic: "Hermes: logowanie ChatGPT w Nous Portal",
    posts: [
      {
        handle: "superstar_rweb3",
        text: "Nous Research just rolled out Sign in with ChatGPT for the Nous Portal. Just sign in with your ChatGPT account and your existing plan carries over into Hermes Agent. Visibility and controls are now in your ChatGPT settings, not hidden inside a separate third-party dashboard.",
        url: "https://x.com/superstar_rweb3/status/2105579292143054926",
      },
    ],
  },
  {
    id: "hermes-sol",
    topic: "Hermes: GPT-6.1 Sol i subagenci",
    posts: [
      {
        handle: "claudiumio",
        text: "I've been using the GPT-6.1 Sol on the Hermes through the Nous Portal for almost an hour straight. It only cost $5. The model manages subagents really well and assigns them heavy work.",
        url: "https://x.com/claudiumio/status/2106257775550501052",
      },
    ],
  },
  {
    id: "dots-permissions",
    topic: "OpenAI Dots: agent z własnym komputerem",
    posts: [
      {
        handle: "harshkoohli",
        text: "OpenAI's Dots thing still weirds me out in a good way. An agent with its own cloud computer that keeps working after you close the chat. Cool until you remember you have to babysit the permissions harder than the prompts.",
        url: "https://x.com/harshkoohli/status/2106266247096623262",
      },
    ],
  },
  {
    id: "btc-eth-etf-split",
    topic: "ETF: BTC +102,7 mln, ETH −55,4 mln (1 X)",
    posts: [
      {
        handle: "OliverYeung6",
        text: "看ETF资金流，日期一定要跟金额一起看。9月30日BTC、ETH现货ETF确实同步流出，但Farside的完整记录显示，10月1日BTC已经恢复约1.03亿美元净流入，ETH则继续流出。10月2日的表格还有产品未更新，暂时不能拿局部合计当最终结果。BTC恢复流入、ETH继续流出，还说明两者不能被一个机构态度概括。",
        url: "https://x.com/OliverYeung6/status/2106262975757603265",
      },
    ],
  },
];
