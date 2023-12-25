"use client";
import { useSession } from "next-auth/react";
export default function Home() {
  const { data } = useSession();
  console.log("data", data);
  return (
    <section className="flex min-h-screen flex-col p-2">
      <div className="container">Khanh</div>
    </section>
  );
}
