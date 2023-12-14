/* eslint-disable @next/next/no-async-client-component */
"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Login() {
  const login = async (type: string) => {
    const data = await signIn("google");
  };
  const { data } = useSession();
  if (data) {
    return redirect("/");
  }

  return (
    <main>
      <form>
        <div className="grid gap-1 py-2">
          <Label>Username</Label>
          <Input placeholder="Username" />
        </div>
        <div className="grid gap-1 py-2">
          <Label>Password</Label>
          <Input type="password" placeholder="Password" />
        </div>
        <Button type="button" onClick={() => {}}>
          Login
        </Button>
      </form>
      <Button
        className="mt-2"
        type="button"
        onClick={() => {
          login("google");
        }}
      >
        Login google
      </Button>
    </main>
  );
}
