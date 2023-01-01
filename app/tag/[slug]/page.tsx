import { use } from "react";
import { getBlogsByTag } from "@lib/tag";
import { ParamsPropsI } from "@interfaces/blog";
import BlogLayout from "@layouts/BlogLayout";
import { capitalize } from "@lib/capitalize";

const getInitialBlogsByTags = async (slug: string) => {
  const blogsByTag = getBlogsByTag(slug);
  return blogsByTag;
};

export default function Page({ params }: ParamsPropsI) {
  const blogByTag = use(getInitialBlogsByTags(params.slug));

  return (
    <>
      <BlogLayout items={blogByTag} title={`#${capitalize(params.slug)}`} />
    </>
  );
}
