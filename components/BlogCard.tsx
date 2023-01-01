import Image from "next/image";
import { BlogI } from "@interfaces/blog";
import { dateFormatter } from "@lib/dateFormatter";
import Link from "next/link";
import { shortify } from "@lib/shortify";

interface BlogCardProps {
  items: BlogI[];
}

export default function BlogCard({ items }: BlogCardProps) {
  return (
    <>
      <div className="mt-8 border-b-[1px] border-b-gray-400"></div>
      <div className="">
        {items.map((blog, index) => (
          <div
            key={index}
            className="gap-x-4 space-x-2 border-b-[1px] border-b-gray-400 py-10 md:grid md:grid-cols-3 md:gap-x-0 xl:space-y-0"
          >
            <div className="relative mt-0 h-72 w-full md:mt-4 md:h-36 md:w-56 lg:mt-2 lg:h-44 lg:w-64">
              <span className="blogImage absolute inset-0 m-0 box-border block overflow-hidden border-0 bg-none p-0 opacity-100">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="absolute inset-0 m-auto box-border block h-0 max-h-full min-h-full w-0 min-w-full max-w-full rounded-xl border-0 object-cover p-0"
                  sizes="100vw"
                  loading="lazy"
                />
              </span>
            </div>
            <div className="mt-4 space-y-3 md:col-span-2 md:mt-0">
              <Link
                href={`/blog/${blog.slug}`}
                className="text-xl font-semibold hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent"
              >
                {blog.title}
              </Link>
              <p className="text-sm font-medium text-[#4cc9f0]">
                {dateFormatter(blog.date)}
                <span className="ml-4">{blog.readingTime} min</span>
              </p>
              <p className="text-gray-400">{shortify(blog.description, 100)}</p>
              <div className="flex flex-wrap">
                {blog.tags.map((tag, index) => (
                  <Link
                    href={`/tag/${tag}`}
                    key={index}
                    className="mt-4 mr-4 rounded-full bg-gray-700 px-3 py-[2px] text-xs font-medium text-[#4cc9f0]"
                  >
                    #{tag.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
