import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import connectDB from "../lib/db";
import User from "../lib/models/User";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn(params: {
      user: any;
      account?: any;
      profile?: any;
      email?: any;
      credentials?: any;
    }) {
      const { user, account, profile } = params;
      await connectDB();
      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        // Create new user
        await User.create({
          Fullname: user.name,
          email: user.email,
          provider: "google",
        });
      }
      return true;
    },
    async session({ session, token }) {
      // Attach DB user _id to session
      const dbUser = await User.findOne({ email: session.user.email });
      if (dbUser) {
        session.user.id = dbUser._id;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET!,
});
