import { getBlogs } from "./blog";

export const getBlogsByTag = (tag: string) => {
  const blogs = getBlogs();
  return blogs.filter((blog) => blog.tags.includes(tag));
};


export const getTagsWithCount = () => {
  const blogs = getBlogs();
  const tags = blogs.map((blog) => blog.tags);
  const flatTags = tags.flat();
  const uniqueTags = [...new Set(flatTags)];
  const tagsWithCount = uniqueTags.map((tag) => {
    return {
      tag,
      count: flatTags.filter((t) => t === tag).length,
    };
  });
  return tagsWithCount;
};


