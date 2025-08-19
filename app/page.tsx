import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div>
      {/* <div className="flex flex-col items-start text-center p-6 gap-4">
        <h1 className="text-2xl font-bold">
          Welcome to the{" "}
          <span className="text-blue-600">AI Mock Interview</span>
        </h1>
        <p className="text-lg">
          Prepare for your technical interviews with our AI-powered platform.
        </p>
        <Button className="bg-blue-600 px-5 ease-in-out duration-300 hover:bg-blue-700 cursor-pointer">
          Get Started
        </Button>
      </div>
      <Image
        src="https://dezyre.gumlet.io/images/blog/how-to-prepare-for-an-ai-interview/Tips_on_How_to_Prepare_for_an_AI_Interview.png?w=376&dpr=2.6"
        alt="AI Mock Interview"
        width={500}
        height={300}
        className="rounded-lg shadow-md ease-in-out duration-300 transform hover:scale-105"
      /> */}
      {/* Header Section */}
      <Header />
      {/* Hero Section */}
      <Hero />
    </div>
  );
}
