"use client";
import LoginButton from "@/components/login";
import { SessionProvider, useSession } from "next-auth/react";

export default function Home() {
  const { data, status } = useSession();
  return <LoginButton>Login</LoginButton>;
}
