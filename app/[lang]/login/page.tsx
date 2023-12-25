"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Suspense, useEffect } from "react";
import Loading from "@/components/loading";
import GoogleIcon from "../../../public/google.svg";
import { useRouter } from "next/navigation";

export default function Login() {
  const { push } = useRouter();

  const login = async (type: string) => {
    await signIn(type);
  };
  const { data, status } = useSession();
  console.log("login mounted");

  useEffect(() => {}, [data]);

  if (data) {
    return redirect("/");
  }
  console.log("login mounted 2");

  if (status === "loading") {
    return <Loading />;
  } else if (status === "unauthenticated") {
    return (
      <Suspense fallback={"Loading"}>
        <main className="mt-10">
          <form>
            <div className="grid gap-1 py-2">
              <Label>Username</Label>
              <Input placeholder="Username" />
            </div>
            <div className="grid gap-1 py-2">
              <Label>Password</Label>
              <Input type="password" placeholder="Password" />
            </div>
            <Button className="flex w-full" type="button" onClick={() => {}}>
              Login
            </Button>
          </form>
          <div
            className="mt-2 flex rounded-md right items-center border-2 cursor-pointer p-2"
            onClick={() => {
              login("google");
            }}
          >
            <GoogleIcon />
            <span>Google</span>
          </div>
        </main>
      </Suspense>
    );
  }
}
