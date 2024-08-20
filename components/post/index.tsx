"use client";

import { app } from "@/constant/app";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { withAuth } from "@/components/hoc/withAuth";
import { Post as PostType } from "@/types/post";

const MAX_HEIGHT = 300;
interface IPost extends PostType {
  isAdmin: boolean;
}
export const KPost = ({
  id,
  title,
  content,
  createdAt,
  isAdmin = false,
}: IPost) => {
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);
  const [isEditable, setEditAble] = useState(false);
  const [isShowMore, setIsShowMore] = useState(false);
  const onNavigation = () => {
    router.push(`blog/${id}`);
  };

  useEffect(() => {
    if (contentRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        // Do what you want to do when the size of the element changes
        const heightContent = contentRef.current?.clientHeight || 0;
        if (heightContent > MAX_HEIGHT) {
          setIsShowMore(true);
        }
      });
      resizeObserver.observe(contentRef.current);
      return () => resizeObserver.disconnect(); // clean up
    }
  }, [contentRef]);

  return (
    <div
      ref={contentRef}
      onMouseEnter={() => {
        setEditAble(true);
      }}
      onMouseLeave={() => {
        setEditAble(false);
      }}
      onClick={onNavigation}
      className="w-full p-3  cursor-pointer  border-b-2"
      style={{ position: "relative" }}
    >
      <div className="flex flex-row w-full rounded-lg ">
        <div className="w-full  border-slate-300 justify-between hover:bg-zinc-100 hover:rounded-sm  p-3 ">
          <div className="flex text-xs">
            {/* <div className="font-extrabold">{app.name}</div>
            <div></div>
            <span role="presentation" className="font-thin mx-1">
              •
            </span>
            <div className="font-thin">
              {dayjs(createdAt).format("YYYY MM DD HH:mm")}
            </div> */}
          </div>
          <div
            className="font-extrabold"
            dangerouslySetInnerHTML={{ __html: `${title}` }}
          />
          <div
            className="line-clamp-5"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
};

export const Post = withAuth(KPost);
