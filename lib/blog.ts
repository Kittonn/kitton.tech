import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import { BlogI } from "@interfaces/blog";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import { readingTime } from "./readingTime";

const markdownToHTML = async (markdown: string) => {
  const result = await remark().use(html).use(remarkGfm).process(markdown);
  return result.toString();
};

const blogDir = (): string => join(process.cwd(), "/content/blogs");

const getBlogFileNames = (): string[] => fs.readdirSync(blogDir());

const getItemInPath = (filePath: string) => {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  return {
    ...data,
    content,
    readingTime: readingTime(content),
  } as BlogI;
};

const getBlog = (name: string) => {
  const blog = getItemInPath(join(blogDir(), name));
  blog.slug = name.replace(/\.md$/, "");
  return blog;
};

const getBlogBySlug = async (slug: string) => {
  const filename = `${slug}.md`;
  const blog = getBlog(filename);
  blog.content = await markdownToHTML(blog.content);
  return blog;
};

const getBlogs = (): BlogI[] => {
  const names = getBlogFileNames();
  const items = names
    .map(getBlog)
    .filter((item) => item.published)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return items;
};

export { getBlogFileNames, getBlogs, getBlogBySlug };
