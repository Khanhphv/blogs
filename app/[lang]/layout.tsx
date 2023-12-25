"use client";
import { Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Logo from "@/components/logo";
import { Suspense } from "react";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/header";
import Loading from "@/components/loading";

const roboto_mono = Roboto_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  console.log("render layout", params);
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Suspense fallback={<Loading />}>
          <div className="container">
            <div className="flex justify-between">
              <Logo />
              <Header />
            </div>
          </div>
          <div className="container mx-auto">{children}</div>
        </Suspense>
      </ThemeProvider>
    </SessionProvider>
  );
}