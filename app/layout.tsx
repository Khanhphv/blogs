"use client";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { AuthContext } from "@/components/authorize";
import { ExperimentProvider } from "gestalt";
import "gestalt/dist/gestalt.css";
import "gestalt-datepicker/dist/gestalt-datepicker.css";
import "../public/index.js";
import { Analytics } from "@vercel/analytics/react";
import { MainLayout } from "@/components/layout/main-layout";
import Loading from "@/components/atoms/loading";

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
          <ThemeProvider attribute="class" defaultTheme="dark">
            <ExperimentProvider value={{}}>
              <Suspense fallback={<Loading />}>
                <AuthContext.Provider value={{ isAdmin, setIsAdmin }}>
                  <Analytics />
                  <div className="webkit-gap"></div>

                  <MainLayout>{children}</MainLayout>
                </AuthContext.Provider>
              </Suspense>
            </ExperimentProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
