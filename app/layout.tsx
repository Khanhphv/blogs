import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Logo from "@/components/logo";
import { Suspense } from "react";
import Loading from "./loading";
const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "de" }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Logo />
          <Suspense fallback={<Loading />}>
            <div className="container mx-auto">{children}</div>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
