import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      {/* Left section (logo + title) */}
      <div className="flex items-center gap-2 cursor-pointer">
        <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
        <h1 className="text-base font-bold md:text-2xl">
          Interview <span className="text-blue-600">Readiness</span>
        </h1>
      </div>

      {/* Right section (auth actions) */}
      <div>
        <SignedOut>
          <Link href={"/sign-in"}>
            <Button className="w-24 transform rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-all duration-300 cursor-pointer hover:bg-blue-700 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Get Started
            </Button>
          </Link>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Header;
