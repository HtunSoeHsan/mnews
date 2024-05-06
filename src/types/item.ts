
export interface source {
    id: string | null;
    name: string | null
}

export interface item {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: source;
  title: string;
  url: string;
  urlToImage: string;
}