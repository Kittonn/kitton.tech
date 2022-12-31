import { ParsedUrlQuery } from "querystring";

export interface BlogI {
  title: string;
  description: string;
  coverImage: string;
  date: string;
  content: string;
  slug: string;
  readingTime: number;
  published: boolean;
  tags: string[];
}

export interface ParamsI extends ParsedUrlQuery {
  slug: string;
}

export interface ParamsPropsI {
  params: ParamsI;
}