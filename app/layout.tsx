"use client";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Suspense, useState } from "react";
import Loading from "@/components/loading";
import { SessionProvider } from "next-auth/react";
import { createContext } from "react";
import { AuthContext } from "@/components/authorize";

export default function RootLayout({
  children,
  params: { session, ...params },
}: {
  children: React.ReactNode;
  params: any;
}) {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
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
              <AuthContext.Provider value={{ isAdmin, setIsAdmin }}>
                <div className="">
                  <div className="flex justify-between items-center"></div>
                </div>
                <div className="flex mx-auto main w-full">{children}</div>
              </AuthContext.Provider>
            </Suspense>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
