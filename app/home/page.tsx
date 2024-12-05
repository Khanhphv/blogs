"use client";
import { MENU } from "@/constant/app";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const session = useSession();

  return <>{JSON.stringify(session)}</>;
}
