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
});

export { handler as GET, handler as POST };
