"use client";
import { Inter, Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Logo from "@/components/logo";
import { Suspense } from "react";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/header";

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
  return (
    <html
      lang={params.lang}
      suppressHydrationWarning
      className={`${roboto_mono.variable} h-min`}
    >
      <body>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Suspense>
              <div className="container mx-auto">{children}</div>
            </Suspense>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
