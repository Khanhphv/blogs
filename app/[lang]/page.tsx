"use client";
import { useSession } from "next-auth/react";
export default function Home() {
  const { data } = useSession();
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col p-2">
      <div className="container"></div>
    </main>
  );
}
