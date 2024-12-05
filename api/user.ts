import { IToken } from "./../types/user";
import { ILoginParams } from "@/types/user";

export const login = async (user: ILoginParams) => {
  const url = `${process.env.NEXT_PUBLIC_API}/login`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  });
  return await res.json();
};
