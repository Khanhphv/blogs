"use client";

import { app } from "@/constant/app";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { withAuth } from "@/components/hoc/withAuth";
export const KPost = ({
  id,
  title,
  content,
  tag,
  created_at,
  route,
  index,
  isAdmin = false,
}: {
  id: string;
  title: string;
  content: string;
  tag: string;
  created_at: string;
  route: string;
  index: number;
  isAdmin: boolean;
}) => {
  const router = useRouter();
  const [isEditable, setEditAble] = useState(false);
  const onNavigation = () => {
    route && router.push(`blog/${route}`);
  };

  const onDelete = async (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const result = await fetch("/api/post/delete", {
      method: "POST",
      body: JSON.stringify({
        id: id,
      }),
    });
    router.refresh();
  };

  return (
    <>
      <div
        onMouseEnter={() => {
          setEditAble(true);
        }}
        onMouseLeave={() => {
          setEditAble(false);
        }}
        onClick={onNavigation}
        className="w-full  border-t-2 p-3 "
      >
        <div className="flex flex-row w-full hover:bg-muted p-2 rounded-lg">
          <div className="w-full  border-slate-300 justify-between">
            <div className="flex text-xs">
              <div className="font-extrabold">
                {app.name}/{tag}
              </div>
              <span role="presentation" className="font-thin mx-1">
                •
              </span>
              <div className="font-thin">{created_at}</div>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: `Chapter ${index}: ${title}` }}
            />
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
          {isEditable && isAdmin && (
            <>
              <div className="tool flex items-center text-red-600">
                <button onClick={onDelete}>Delete</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export const Post = withAuth(KPost);
