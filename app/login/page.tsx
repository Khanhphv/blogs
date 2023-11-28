import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login page",
  description: "Login page",
};

export default function Login() {
  return (
    <main className="">
      <form>
        <div className="grid gap-1 py-2">
          <Label>Username</Label>
          <Input placeholder="Username" />
        </div>
        <div className="grid gap-1 py-2">
          <Label>Password</Label>
          <Input type="password" placeholder="Password" />
        </div>
      </form>
    </main>
  );
}
