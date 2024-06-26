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
    <>
      <form action={onSubmit}>
        <Input required name="username" type="text" placeholder="Username" />
        <Input
          required
          name="password"
          type="password"
          placeholder="Password"
        />
        <Button type="submit">Login</Button>
      </form>
    </>
  );
}
