"use client";
import { Roboto_Mono } from "next/font/google";

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
  return <div className="mx-auto main">{children}</div>;
}
