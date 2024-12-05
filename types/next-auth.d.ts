import { Session } from "inspector";
import { StringIterator } from "lodash";
import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      email: string;
      picture: string;
      sub: string;
      accessToken: string;
      refreshToken: string;
      image: string;
    };
  }
}
