import { loginWithSocical } from "@/utils/login";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        process.env.GOOGLE_CLIENT_ID ||
        "177962097889-l3sb9840gleejrojuvsoimiu5tmn5nj4.apps.googleusercontent.com",
      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET ||
        "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",
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async signIn(data) {
      console.log("-----------------------------");
      console.log("SignIn");
      if (data) {
        const { account, user } = data;
        console.log({ ...user, ...account });
        const res = await loginWithSocical({ ...user, ...account });
        return true;
      }
      return true;
    },

    async session(data) {
      console.log("-----------------------------");
      console.log("Session");
      const { session } = data;
      return session;
    },
    async jwt(data) {
      return data;
    },
  },
});

export { handler as GET, handler as POST };
