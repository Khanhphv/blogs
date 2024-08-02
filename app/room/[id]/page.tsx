import Radar from "@/components/pages/room/radar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login",
};

const getData = async (id: string) => {
  const data = await fetch(`${process.env.DOMAIN_URL}/api/room/get?id=${id}`, {
    cache: "no-store",
  });

  const res = await data.json();
  return res;
};

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await getData(id);
  if (data.id) {
    return <Radar room={data.id} />;
  } else {
    return <h2>Link is expired</h2>;
  }
}
