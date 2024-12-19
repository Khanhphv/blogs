"use client";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { AuthContext } from "@/components/authorize";
import { Analytics } from "@vercel/analytics/react";
import { MainLayout } from "@/components/layout/main-layout";
import Loading from "@/components/atoms/loading";
import { UserLayout } from "@/components/layout/user-layout";

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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </head>
      <body suppressHydrationWarning>
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="white">
            <Suspense fallback={<Loading />}>
              <AuthContext.Provider value={{ isAdmin, setIsAdmin }}>
                <Analytics />
                <div className="webkit-gap"></div>
                <UserLayout>{children}</UserLayout>
              </AuthContext.Provider>
            </Suspense>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
