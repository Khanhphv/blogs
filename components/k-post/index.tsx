"use client";

import { app } from "@/constant/app";

export default function KPost({
  title,
  content,
  tag,
  created_at,
}: {
  title: string;
  content: string;
  tag: string;
  created_at: string;
}) {
  return (
    <div className="border bg-white rounded p-2 border-slate-300 hover:border-black">
      <div className="flex text-xs">
        <div className="font-extrabold">
          {app.name}/{tag}
        </div>
        <span role="presentation" className="font-thin mx-1">
          •
        </span>
        <div className="font-thin">{created_at}</div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: title }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
