import type { Feed } from "./types";

export const FEEDS: Feed[] = [
  {
    id: "openai-blog",
    title: "OpenAI Blog",
    url: "https://openai.com/blog/rss.xml",
    category: "ai",
  },
  {
    id: "anthropic",
    title: "Anthropic News",
    url: "https://www.anthropic.com/news/rss.xml",
    category: "ai",
  },
  {
    id: "google-ai",
    title: "Google AI Blog",
    url: "https://blog.google/technology/ai/rss/",
    category: "ai",
  },
  {
    id: "techcrunch-ai",
    title: "TechCrunch AI",
    url: "https://techcrunch.com/category/artificial-intelligence/feed/",
    category: "ai",
  },
  {
    id: "the-block",
    title: "The Block",
    url: "https://www.theblock.co/rss.xml",
    category: "crypto",
  },
  {
    id: "cointelegraph",
    title: "Cointelegraph",
    url: "https://cointelegraph.com/rss",
    category: "crypto",
  },
  {
    id: "github-blog",
    title: "The GitHub Blog",
    url: "https://github.blog/feed/",
    category: "github",
  },
];
