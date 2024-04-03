"use client";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Suspense } from "react";
import Loading from "@/components/loading";
import { SessionProvider } from "next-auth/react";
export default function RootLayout({
  children,
  params: { session, ...params },
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html>
      <body suppressHydrationWarning>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Suspense fallback={<Loading />}>
              <div className="">
                <div className="flex justify-between items-center"></div>
              </div>
              <div className="flex mx-auto main w-full">{children}</div>
            </Suspense>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
