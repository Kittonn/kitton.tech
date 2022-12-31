import { getBlogs } from "./blog";

export const getBlogsByTag = (tag:string) => {
  const blogs = getBlogs();
  return blogs.filter((blog) => blog.tags.includes(tag));
};
