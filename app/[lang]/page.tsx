import CreatePost from "@/components/k-create-post";
import KPost from "@/components/k-post";
import { getPost } from "@/firebase/post";
import { Post } from "@/types/post";

export function generateStaticParams() {
  return [
    {
      lang: "vi",
    },
    {
      lang: "en",
    },
  ];
}
export default async function Home({ params }: any) {
  console.log("paramsxxx", params.lang);
  const getDetails = async () => {
    const data = await getPost();
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
