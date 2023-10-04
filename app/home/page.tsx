"use client";
import { PostCard, LightDarkSwitch, Pagination } from "@/components";

export default function Home() {
  return (
    <>
      {/* <div>
        <PostCard widthImage={500} horizontal />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-4 ">
        {Array(10)
          .fill(10)
          .map((e, index) => (
            <PostCard key={index} />
          ))}
      </div> */}
      <Pagination onChange={(page) => console.log(page)} total={20} />
    </>
  );
}
