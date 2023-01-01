import { use } from "react";
import { getTagsWithCount } from "@lib/tag";
import Link from "next/link";

const getInitialTags = async () => {
  const tags = getTagsWithCount();
  return tags;
};

export default function Page() {
  const tags = use(getInitialTags());

  return (
    <div>
      <div>
        <h1 className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-3xl font-semibold text-transparent md:text-5xl">
          Tags
        </h1>
      </div>
      <div className="mt-8 mb-3 border-b-[1px] border-b-gray-400"></div>
      {tags.length === 0 ? (
        <div className="mt-8">
        <h1 className="text-xl font-medium text-gray-300">No tag found</h1>
      </div>
      ) : (
        <div className="flex flex-wrap">
          {tags.map((tag, index) => (
            <div key={index} className="mt-5 mr-4 text-sm font-medium">
              <Link
                href={`/tag/${tag.tag}`}
                className="rounded-full bg-gray-700 px-3 py-[2px]  text-[#4cc9f0]"
              >
                {tag.tag.toUpperCase()}
              </Link>
              <span className="ml-2 text-gray-300">({tag.count})</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
