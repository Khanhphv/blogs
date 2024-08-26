import { DetailedPostHOC } from "@/components/post/edit-post";
import { Post } from "@/types/post";
import type { Metadata, ResolvingMetadata } from "next";

async function getData(id: string) {
  const data = await fetch(`${process.env.DOMAIN_URL}/api/post/get?id=${id}`, {
    cache: "no-store",
  });

  const blog = await data.json();

  if (!data.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return blog;
}

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const data = (await getData(slug)) as { data: Post };

  return {
    title: data.data.title,
  };
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data = (await getData(slug)) as { data: Post };

  return (
    <div className="flex p-4 min-h-screen">
      <DetailedPostHOC
        post={{
          data: {
            ...data.data,
            id: slug,
          },
        }}
      />
    </div>
  );
}
