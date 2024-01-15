import CreatePost from "@/components/k-create-post";
import KPost from "@/components/k-post";
import { Post } from "@/types/post";
import { headers } from "next/headers";

export default async function Home() {
  const headersList = headers();
  const host = headersList.get("host");
  console.log(host);
  const getDetails = async () => {
    const res = fetch(`https://${host}/api/getDocs`, {
      cache: "no-store",
    });
    const data = await (await res).json();
    return data;
  };
  const { data } = await getDetails();
  const posts: Post[] = Object.values(data) || [];

  return (
    <section className="flex min-h-screen flex-col p-2">
      {posts?.map((post, key) => {
        return (
          <KPost
            key={key}
            title={post.title}
            tag={"xxx"}
            created_at="xxx"
            content="xxx"
          />
        );
      })}
    </section>
  );
}
