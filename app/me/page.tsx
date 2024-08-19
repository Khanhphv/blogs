/* eslint-disable @next/next/no-img-element */
import { ThumbNail } from "@/components/me";
import styles from "./me.module.scss";
import { Metadata } from "next";
import { Motion } from "@/components/motion";
import { Navbar } from "@/components/navbar";
import Logo from "@/components/logo";

export const metadata: Metadata = {
  title: "Khanh's blog",
  description: "...",
};

export default function Page() {
  return (
    <>
      <ThumbNail src="/bg.jpg" />
      <div className={`${styles.main} p-5`}>
        <div className="h-full w-full backdrop-opacity-10 backdrop-invert bg-white/30 rounded  p-7">
          <div className="flex">
            <Logo />
            <Navbar classContent="grow" />
          </div>

          <div className={`flex ${styles.content} flex-col`}>
            <Motion>
              <div className="text-sm">My Blog</div>
              <div className="flex lg:text-5xl sm:text-5xl text-2xl font-bold">
                Khanh Pham
              </div>
              <div className="mt-2 lg:text-2xl sm:text-xl text-md">
                Exploring Ideas, Inspiring Minds: Navigate the World of
                Insightful Blogging
              </div>
            </Motion>
          </div>
        </div>
      </div>
    </>
  );
}
