import { use } from "react";
import { getBlogs } from "@lib/blog";
import Link from "next/link";
import Image from "next/image";

const getInitialBlogs = async () => {
  const blogs = getBlogs();
  return blogs;
};

const shortify = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

export default function Page() {
  const blogs = use(getInitialBlogs());

  return (
    <div className="text-gray-300">
      <div>
        {blogs.map((blog, index) => (
          <div key={index}>
            <div className="">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                width={500}
                height={300}
              />
            </div>
            <div>
              <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
              <p>{shortify(blog.description, 100)}</p>
              <p>{blog.readingTime} min</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
