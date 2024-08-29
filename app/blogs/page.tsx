import { Post } from "@/components/post";
import { Metadata } from "next";
import style from "./syle.module.scss";
async function getData(): Promise<{ data: any }> {
  const data = await fetch(`${process.env.DOMAIN_URL}/api/post/get`, {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!data.ok) {
    // This will activate the closest `error.js` Error Boundary
    return {
      data: [],
    };
  }

  return data.json();
}

export const metadata: Metadata = {
  title: "Khanh's blog",
  description: "...",
};

export default async function Page() {
  const data = await getData();
  return (
    <>
      <div className="min-h-[60px] flex sticky top-0 z-10 max-sm:hidden">
        <div
          className={`h-[30px] w-[30px] absolute bottom-0 overflow-hidden ${style.leftCorner}`}
        >
          <div
            className={`h-[50px] w-[50px] absolute bg-secondary absolute ${style.leftCornerBorder}`}
          ></div>
        </div>
        <div
          className={`h-[30px] w-[30px] absolute bottom-0 overflow-hidden ${style.rightCorner}`}
        >
          <div
            className={`h-[50px] w-[50px] absolute bg-secondary absolute ${style.rightCornerBorder}`}
          ></div>
        </div>
        <div className="w-full bg-background"></div>
      </div>
      <section className="flex w-full flex-col sm:rounded-md sm:bg-secondary">
        {Object.entries(data.data)
          ?.reverse()
          .map(([key, data]: [string, any], i) => {
            return (
              <Post
                id={key}
                index={++i}
                route={key}
                key={key}
                tag={data?.tag || "test"}
                createdAt={data?.createdAt}
                title={data?.title}
                content={data?.content}
              />
            );
          })}
      </section>
    </>
  );
}
