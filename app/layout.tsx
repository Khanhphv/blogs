"use client";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Suspense, useEffect, useRef, useState } from "react";
import Loading from "@/components/loading";
import { SessionProvider } from "next-auth/react";
import { createContext } from "react";
import { AuthContext } from "@/components/authorize";
import { Box, ColorSchemeProvider, ExperimentProvider } from "gestalt";
import Script from "next/script";
import "gestalt/dist/gestalt.css";
import "gestalt-datepicker/dist/gestalt-datepicker.css";
import "../public/index.js";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
  params: { session, ...params },
}: {
  children: React.ReactNode;
  params: any;
}) {
  const contentRef = useRef<HTMLBodyElement>(null);
  useEffect(() => {
    const iOS = () => {
      return (
        [
          "iPad Simulator",
          "iPhone Simulator",
          "iPod Simulator",
          "iPad",
          "iPhone",
          "iPod",
        ].includes(navigator.platform) ||
        // iPad on iOS 13 detection
        (navigator.userAgent.includes("Mac") && "ontouchend" in document)
      );
    };
    if (contentRef.current && iOS()) {
      const resizeObserver = new ResizeObserver(() => {
        // Do what you want to do when the size of the element changes
        const width = contentRef.current?.clientWidth || 0;
        const height = contentRef.current?.clientHeight || 0;
        const heightScreen = window.screen.height;
        console.log(width, height);
        const content = document.getElementById("khanh-content");
        const main_content = document.getElementById("main-content");

        if (width <= 640 && height > heightScreen) {
          content?.classList.add("container-full");
          main_content?.classList.add("wrapper");
        } else {
          content?.classList.remove("container-full");
          main_content?.classList.remove("wrapper");
        }
      });
      resizeObserver.observe(contentRef.current);
      return () => resizeObserver.disconnect(); // clean up
    }
  }, []);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  return (
    <html>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </head>
      <body ref={contentRef} suppressHydrationWarning>
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <ExperimentProvider value={{}}>
              {/* <ColorSchemeProvider colorScheme="light" fullDimensions> */}
              {/* <Box color="default" height="100%" width="100%"> */}
              <Suspense fallback={<Loading />}>
                <AuthContext.Provider value={{ isAdmin, setIsAdmin }}>
                  <div className="webkit-gap"></div>
                  <div
                    id="main-content"
                    className=" flex flex-row max-sm:flex-col mx-auto main w-full min-h-screen "
                  >
                    <div className="h-screen w-full" id="khanh-content">
                      {children}
                      <Analytics />
                    </div>
                  </div>
                  {/* <div className="flex flex-row max-sm:flex-col mx-auto main w-full min-h-screen ">
                    {children}
                  </div> */}
                </AuthContext.Provider>
              </Suspense>
              {/* </Box> */}
              {/* </ColorSchemeProvider> */}
            </ExperimentProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>
      <Script src="https://example.com/script.js" />
    </html>
  );
}
