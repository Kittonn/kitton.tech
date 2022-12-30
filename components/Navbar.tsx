"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Blog",
    url: "/blog",
  },
];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  const handleClick = () => setToggle(false);

  return (
    <header className="fixed z-50 w-full border-b-[1px] border-b-gray-600 bg-[#0a100d] text-lg font-medium text-gray-300 opacity-90">
      <nav className="container mx-auto flex items-center justify-between px-5 py-3 lg:max-w-screen-lg">
        <div className="z-50 flex w-full items-center justify-between">
          <Link href="/" aria-label="Go to homepage">
            <svg
              width="32"
              height="32"
              viewBox="0 0 495 423"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 50C0 22.3858 22.3858 0 50 0H70V372C70 399.614 47.6142 422 20 422H0V50Z"
                fill="#06D6A0"
              />
              <path
                d="M219.394 0L235 13.0019C256.216 30.6775 259.086 62.2054 241.411 83.4214L138.396 207.069L122.79 194.068C101.574 176.392 98.704 144.864 116.38 123.648L219.394 0Z"
                fill="#FFD166"
              />
              <path
                d="M106.724 311.877C86.6146 292.952 85.654 261.308 104.579 241.199L118.499 226.406L235.7 336.701C255.81 355.626 256.77 387.269 237.846 407.379L223.925 422.171L106.724 311.877Z"
                fill="#EF476F"
              />
              <path
                d="M354 157C354 129.386 376.386 107 404 107H425V356C425 383.614 402.614 406 375 406H354V157Z"
                fill="#E76F51"
              />
              <path
                d="M284 50C284 22.3858 306.386 0 334 0H495V20C495 47.6142 472.614 70 445 70H284V50Z"
                fill="#5BC0EB"
              />
            </svg>
          </Link>
          <button
            id="menuButton"
            aria-label="hamburger menu"
            onClick={() => setToggle(!toggle)}
            className="z-50 sm:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              width="24"
              height="24"
            >
              {toggle ? (
                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
              ) : (
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`absolute ${
            toggle ? "top-0" : "top-[-1000px]"
          } duration-400 left-0 flex min-h-screen w-full items-center justify-center bg-[#0a100d] text-center opacity-90 transition-all ease-in-out sm:relative sm:top-0 sm:block sm:min-h-fit sm:w-fit sm:transition-none`}
        >
          <ul className="flex flex-col items-center justify-center space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  onClick={handleClick}
                  href={link.url}
                  className={`${
                    pathname === link.url
                      ? "bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
