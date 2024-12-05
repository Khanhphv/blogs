import { IToken } from "./../types/user";
import { ILoginParams } from "@/types/user";

export const login = async (user: ILoginParams): Promise<IToken> => {
  const url = `${process.env.NEXT_PUBLIC_API}/login`;
  console.log(user);
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await res.json();
  console.log(data);
  return data;
};
