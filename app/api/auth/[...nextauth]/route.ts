import { loginWithSocical } from "@/utils/login";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { login } from "@/api/user";
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
    async signIn({ user, account, profile }) {
      console.log("signIn");
      try {
        const res = await login({
          email: user.email || "",
          token: account?.id_token || "",
          provider: "google",
        });
        user.accessToken = res.access as any;
        user.refreshToken = res.refresh;
        return user as any;
      } catch (error) {}
      return false;
    },
    async jwt(data) {
      const { user, token } = data;
      return { ...token, ...user };
    },
    async session({ session, token }) {
      return { ...session, ...token };
    },
  },
});

export { handler as GET, handler as POST };
