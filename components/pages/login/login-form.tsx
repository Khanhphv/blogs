"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "./login";
import { useRouter } from "next/navigation";
import { ADMIN_ROUTES, ROUTES } from "@/constant/routes";

export default function LoginForm() {
  const router = useRouter();
  const onSubmit = async (formData: any) => {
    try {
      await login({
        username: formData.get("username"),
        password: formData.get("password"),
      });
      // redirect(ADMIN_ROUTES.keys);
      router.push(ADMIN_ROUTES.keys);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full">
      <form className="p-5" action={onSubmit}>
        <Input
          required
          className="my-3"
          name="username"
          type="text"
          placeholder="Username"
        />
        <Input
          className="my-3"
          required
          name="password"
          type="password"
          placeholder="Password"
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
