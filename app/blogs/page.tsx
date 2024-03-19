import KPost from "@/components/k-post";
import { Metadata } from "next";

async function getData(): Promise<{ data: any }> {
  const data = await fetch(`${process.env.DOMAIN_URL}/api/getDocs`, {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!data.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return data.json();
}

export const metadata: Metadata = {
  title: "Khanh's blog",
  description: "...",
};

export default async function Page() {
  const data = await getData();
  return (
    <section className="flex w-full min-h-screen flex-col p-2 gap-4">
      {Object.entries(data.data)?.map(([key, data]: [string, any], i) => {
        return (
          <KPost
            index={++i}
            route={key}
            key={key}
            tag={data.tag || "test"}
            created_at={data.createdAt}
            title={data?.title}
            content={data?.content}
          />
        );
      })}
    </section>
  );
}
