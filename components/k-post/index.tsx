"use client";

import { app } from "@/constant/app";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function KPost({
  id,
  title,
  content,
  tag,
  created_at,
  route,
  index,
}: {
  id: string;
  title: string;
  content: string;
  tag: string;
  created_at: string;
  route: string;
  index: number;
}) {
  const router = useRouter();
  const [isShowTools, setShowTool] = useState(false);
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
          setShowTool(true);
        }}
        onMouseLeave={() => {
          setShowTool(false);
        }}
        onClick={onNavigation}
        className="flex flex-row border rounded p-2 border-slate-300 hover:border-primary justify-between"
      >
        <div className="">
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
        {isShowTools && (
          <>
            <div className="tool flex items-center text-red-600">
              <button onClick={onDelete}>Delete</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
