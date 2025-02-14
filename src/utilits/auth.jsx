import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      console.log("🔹 JWT Callback - Token Before:", token);
      console.log("🔎 Debug - Account:", account);
      console.log("🔎 Debug - User:", user);
  
      if (account && user) {
        token.accessToken = account.access_token;
        token.id = user?.id;
      }
      console.log("✅ JWT Callback - Token After:", token);
      return token;
    },

    async session({ session, token }) {
      console.log("🔹 Session Callback - Session Before:", session);
      console.log("🔎 Debug - Token:", token);
      if (token && token.id) {
        session.user.id = token.id;
        session.accessToken = token.accessToken;
      }
      console.log("✅ Session Callback - Session After:", session);
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
  debug: true, // ✅ Enables detailed logs
};
