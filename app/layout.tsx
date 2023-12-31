import { Header, Sidebar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-black`}>
        <div className="container mx-auto justify-between flex pt-6 pb-6">
          <p className="dark:text-white text-black font-bold">Khamphamviet</p>
          <Sidebar className="lg:hidden" />
          <Header className="hidden lg:flex" />
        </div>
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}
