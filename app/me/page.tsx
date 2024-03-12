import { Thumbnail } from "@/components/me";
import styles from "./me.module.scss";
import { Metadata } from "next";
import { Motion } from "@/components/motion";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Khanh's blog",
  description: "...",
};

const IMAGES = ["/test.png", "/test.png", "/test.png"];

export default function Page() {
  return (
    <>
      <Thumbnail src="/bg.jpg" />
      <div className={`${styles.main} p-5`}>
        <div className="h-full w-full backdrop-opacity-10 backdrop-invert bg-white/30 rounded  p-7">
          <Navbar />
          <div className={`flex ${styles.content} flex-col`}>
            <Motion>
              <div className="text-sm">My Blog</div>
              <div className="flex text-5xl font-bold">Khanh Pham</div>
              <div className="mt-2 text-2xl">
                Exploring Ideas, Inspiring Minds: Navigate the World of
                Insightful Blogging
              </div>
            </Motion>

            <div
              className="no-scrollbar flex gap-4 pt-5 max-sm:overflow-x-auto"
              style={{
                height: "max-content",
              }}
            >
              {IMAGES.map((e, index) => (
                <Motion
                  key={index}
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ ease: "circOut", duration: 0.5 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Image
                    alt={`${index}`}
                    className={`lazy rounded-3xl ${styles.image}`}
                    width={400}
                    src="/test.png"
                  />
                </Motion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
