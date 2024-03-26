import CreatePost from "@/components/k-create-post";
import KPost from "@/components/k-post";
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
