import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import path from "path";

const MenuOption = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Upgrade",
    path: "/upgrade",
  },
  {
    name: "How it works?",
    path: "/how-it-works",
  },
];

const AppHeader = () => {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-10 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2 cursor-pointer">
        {/* <div className="size-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-800" /> */}
        <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
        <h1 className="text-base font-bold md:text-xl">
          Interview <span className="text-blue-600">Readiness</span>
        </h1>
      </div>
      <div>
        {/* <UserButton /> */}
        <ul className="flex gap-5">
          {MenuOption.map((option, index) => (
            <li
              className="text-sm cursor-pointer font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-all hover:scale-105"
              key={index}
            >
              {option.name}
            </li>
          ))}
        </ul>
      </div>
      <UserButton />
    </nav>
  );
};

export default AppHeader;
