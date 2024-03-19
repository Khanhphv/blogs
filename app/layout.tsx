import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Suspense } from "react";
import Loading from "@/components/loading";
import Logo from "@/components/logo";
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  console.log("params", params);
  return (
    <html>
      <body suppressHydrationWarning>
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
            <div className="flex mx-auto main w-full min-h-screen h-full">
              {children}
            </div>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
