export type DailyEdition = {
  date: string;
  kicker: string;
  lead: string;
  bullets: string[];
};

export type TrendPost = {
  handle: string;
  text: string;
  url?: string;
};

export type Trend = {
  id: string;
  topic: string;
  posts: TrendPost[];
};

export type Feed = {
  id: string;
  title: string;
  url: string;
  category: "ai" | "crypto" | "github" | "tech";
};
