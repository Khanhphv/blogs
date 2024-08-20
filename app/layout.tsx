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
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body suppressHydrationWarning>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <Suspense fallback={<Loading />}>
              <AuthContext.Provider value={{ isAdmin, setIsAdmin }}>
                <div className="flex flex-col mx-auto main w-full min-h-screen">
                  {children}
                </div>
              </AuthContext.Provider>
            </Suspense>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
