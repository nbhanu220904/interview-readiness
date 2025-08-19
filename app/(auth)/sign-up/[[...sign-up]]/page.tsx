import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex min-h-screen">
      {/* Left section (full image) */}
      <div className="relative w-1/2">
        <Image
          src="/Data_security_01.jpg"
          alt="Login"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right section (white background with centered SignIn) */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="p-8 rounded-lg max-w-md w-full">
          <SignUp />
        </div>
      </div>
    </div>
  );
}
