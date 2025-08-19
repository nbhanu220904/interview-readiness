import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "./ConvexClientProvider";
import Provider from "./Provider";

const outfit = Outfit({
  //   variable: "--font-outfit",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Interview Readiness",
  description:
    "AI Powered MOCK Interviews - Prepare for your technical interviews with confidence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <ConvexClientProvider>
            <Provider>{children}</Provider>
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
