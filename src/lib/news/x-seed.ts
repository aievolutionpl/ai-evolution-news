import type { Trend } from "./types";

export const TRENDS: Trend[] = [
  {
    id: "openai-math-release",
    topic: "OpenAI: paczka wyników matematycznych, model wewnętrzny",
    posts: [
      {
        handle: "OpenAI",
        text: "We're releasing a broad range of new mathematical results produced by an internal frontier model. We've been consulting with the independent Advisory Group on Mathematics and Artificial Intelligence at the Institute for Advanced Study, and we have drawn on their advice and public recommendations to inform how we release these results.",
        url: "https://x.com/OpenAI/status/2107596713791767021",
      },
    ],
  },
  {
    id: "openai-math-list",
    topic: "Lista twierdzeń z paczki — relacja, nie komunikat firmy",
    posts: [
      {
        handle: "BLUECOW009",
        text: "OpenAI just released a ridiculous amount of new math. Hilbert's 10th over the rationals solved. Unique Games solved. Hadwiger disproved. Catalan's constant proved irrational. irrationality exponent of π = 2. L = RL = BPL. 722 manuscripts. 372 result families.",
        url: "https://x.com/BLUECOW009/status/2107625269737451881",
      },
    ],
  },
  {
    id: "openai-math-wsj",
    topic: "WSJ o reakcji na wyniki OpenAI",
    posts: [
      {
        handle: "JimPethokoukis",
        text: "As stunned math experts began to absorb the results, even a researcher inside Anthropic called OpenAI's release \"obviously the most significant moment in mathematical history.\" It [WSJ]",
        url: "https://x.com/JimPethokoukis/status/2107644101307126190",
      },
    ],
  },
  {
    id: "pentagon-claude",
    topic: "Pentagon: oficjalnie koniec Claude, źródła BBC mówią inaczej",
    posts: [
      {
        handle: "mark_k",
        text: "The Pentagon has finally pulled the plug on Claude, according to an official speaking to the BBC. Anthropic was blacklisted in February, with a deadline to stop using its tools by late August. Yet sources say Claude was still being used as recently as last week, including in military operations against Iran. The Pentagon has since signed contracts with Google, xAI and OpenAI.",
        url: "https://x.com/mark_k/status/2107543434726646141",
      },
    ],
  },
  {
    id: "btc-84900",
    topic: "Bitcoin: piąty test 86–90 tys., wsparcie 84 900",
    posts: [
      {
        handle: "qingtianbtc",
        text: "#BTC 行情分析 10.7 日线压力位86000-90600持续压制，已经测试5次了，每次都有不同程度的下跌，我觉得今天大概率会跌破84900支撑去往84000，其他观点和昨天一致",
        url: "https://x.com/qingtianbtc/status/2107647728868270427",
      },
    ],
  },
  {
    id: "hermes-index",
    topic: "Hermes Index: modele liczone w harnessie agenta",
    posts: [
      {
        handle: "witcheer",
        text: "Hermes Index scores models on what they get done inside Hermes Agent, and on what each task costs. Four suites, all run in the Hermes Agent harness: Hermes Bench, TerminalBench 4, TerminalBench Science and SkillsBench. Hermes Bench is 150 tasks across 25 categories. Each one starts in a workspace with real files, and the grader checks what the agent left behind.",
        url: "https://x.com/witcheer/status/2107705107777274121",
      },
    ],
  },
  {
    id: "hermes-not-assistant",
    topic: "Teknium: Hermes nie jest tylko asystentem od maili",
    posts: [
      {
        handle: "Teknium",
        text: "Friendly reminder that Hermes was never built or intended to be exclusively for the personal assistant agent that can just read your emails and nothing else. I fully intend and have plainly stated many times that I always built hermes to be the most powerful AI Agent. The mobile app will be almost exclusively focused on consumer — but they are not our only demographic.",
        url: "https://x.com/Teknium/status/2107712074038288806",
      },
    ],
  },
  {
    id: "grok-bot-vm",
    topic: "Grok Bot i kolejka agentów z własną maszyną",
    posts: [
      {
        handle: "yulmu_coffee",
        text: "Grok Bot이 본격적으로 연 VM Agent는 Hermes Bot, Muse, Dots, Cue, Hark까지 연달아 출시됐습니다. IT 고래들이 가장 먼저 달려들어 참전하는 시장입니다. 지금 당장은 범용 일상 작업 팀으로 활용되고 있지만, 도메인 특화 모델과 툴이 준비된 에이전트도 나올 겁니다.",
        url: "https://x.com/yulmu_coffee/status/2107705633294414081",
      },
    ],
  },
];
