import CreatePost from "@/components/post/create-post";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khanh's blog",
  description: "...",
};

export default async function Page() {
  return (
    <div className="container">
      <CreatePost />
    </div>
  );
}
