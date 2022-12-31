import { use } from "react";
import { ParsedUrlQuery } from "querystring";
import { getBlogBySlug } from "@lib/blog";

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface Props {
  params: Params;
}

const getIninitialBlog = async (slug: string) => {
  const blog = getBlogBySlug(slug);
  return blog;
};

export default function Page({ params }: Props) {
  const blog = use(getIninitialBlog(params.slug));
  return (
    <div className="">
      <article className="prose lg:prose-lg">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </article>
    </div>
  );
}
