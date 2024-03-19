"use client";

import { app } from "@/constant/app";
import Head from "next/head";
import { useRouter } from "next/navigation";
export default function KPost({
  title,
  content,
  tag,
  created_at,
  route,
  index,
}: {
  title: string;
  content: string;
  tag: string;
  created_at: string;
  route: string;
  index: number;
}) {
  const router = useRouter();
  const onNavigation = () => {
    route && router.push(`blog/${route}`);
  };
  return (
    <>
      <div
        onClick={onNavigation}
        className="border rounded p-2 border-slate-300 hover:border-primary"
      >
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
    </>
  );
}
