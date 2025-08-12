import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import connectDB from "../lib/db";
import User from "../lib/models/User";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({
      user,
      account,
      profile,
    }: {
      user: any;
      account: any;
      profile: any;
    }) {
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
