/* eslint-disable @next/next/no-async-client-component */
"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { getProviders, signIn } from "next-auth/react";

export default function Login() {
  return (
    <main className="">
      {/* <form> */}
      <div className="grid gap-1 py-2">
        <Label>Username</Label>
        <Input placeholder="Username" />
      </div>
      <div className="grid gap-1 py-2">
        <Label>Password</Label>
        <Input type="password" placeholder="Password" />
      </div>
      <Button onClick={() => signIn("google")}>Login</Button>
      {/* </form> */}
    </main>
  );
}
