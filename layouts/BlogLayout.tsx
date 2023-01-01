"use client";
import { useState } from "react";
import { BlogI } from "@interfaces/blog";
import BlogCard from "@components/BlogCard";

interface BlogLayoutI {
  items: BlogI[];
  title: string;
}

export default function BlogLayout({ items, title }: BlogLayoutI) {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredItems = items.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="text-gray-300">
      <div>
        <h1 className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-3xl font-semibold text-transparent md:text-5xl">
          {title}
        </h1>
        <div className="relative mt-6 max-w-lg md:mt-8">
          <input
            type="text"
            placeholder="Search articles"
            value={search}
            className="border-1 block w-full rounded-md border-[#212529] bg-[#212529] px-4 py-3"
            onChange={handleChange}
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
      <BlogCard items={filteredItems} />
    </div>
  );
}
