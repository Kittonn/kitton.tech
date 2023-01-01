import { BlogI } from "@interfaces/blog";
import { dateFormatter } from "@lib/dateFormatter";
import Image from "next/image";
import Link from "next/link";
import { shortify } from "@lib/shortify";

interface BlogLayoutI {
  items: BlogI[];
  title: string;
}

export default function BlogLayout({ items,title }: BlogLayoutI) {
  return (
    <div className="text-gray-300">
      <div>
        <h1 className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-3xl font-semibold text-transparent md:text-5xl">
          {title}
        </h1>
        <div className="relative mt-8 max-w-lg">
          <input
            type="text"
            placeholder="Search articles"
            className="border-1 block w-full rounded-md border-[#212529] bg-[#212529] px-4 py-3"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            stroke="currentColor"
            fill="currentColor"
            width="1em"
            height="1em"
            strokeWidth="0"
            className="absolute top-4 right-4"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
          </svg>
        </div>
      </div>
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
    </div>
  );
}
