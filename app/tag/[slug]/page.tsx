import { use } from "react";
import { getBlogsByTag } from "@lib/tag";
import { ParamsPropsI } from "@interfaces/blog";

const getInitialBlogsByTags = async (slug: string) => {
  const blogsByTag = getBlogsByTag(slug);
  return blogsByTag;
};

export default function Page({ params }: ParamsPropsI) {
  params.slug = params.slug.replace("%20", " ");
  const blogByTag = use(getInitialBlogsByTags(params.slug));

  return (
    <div className="">
      <h1 className="text-white">#{params.slug}</h1>
      <p className="text-white">{blogByTag.length}</p>
    </div>
  );
}
