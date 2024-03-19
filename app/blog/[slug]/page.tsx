import { DetailedPost } from "@/components/post/edit-post";

async function getData(id: string) {
  const data = await fetch(`${process.env.DOMAIN_URL}/api/getDocs?id=${id}`, {
    cache: "no-store",
  });

  const blog = await data.json();

  if (!data.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return blog;
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data = await getData(slug);

  return <DetailedPost post={data} />;
}
