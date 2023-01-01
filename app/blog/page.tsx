import { use } from "react";
import { getBlogs } from "@lib/blog";
import BlogLayout from "@layouts/BlogLayout";

const getInitialBlogs = async () => {
  const blogs = getBlogs();
  return blogs;
};

export default function Page() {
  const blogs = use(getInitialBlogs());

  return (
    <div className="text-gray-300">
  
      <BlogLayout items={blogs} title={"All Posts"} />
    </div>
  );
}
