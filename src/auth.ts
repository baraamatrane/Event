import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "../lib/db";
import User from "../lib/models/User";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        name: { label: "Name", type: "text" }, // Optional: for signup
      },
      async authorize(credentials: any) {
        await connectDB();
        const user = await User.findOne({ email: credentials?.email });
        if (!user) {
          throw new Error("No user found");
        }
        const isValid = await compare(credentials?.password, user.password);
        if (!isValid) {
          throw new Error("Invalid password");
        }
        return {
          id: user._id.toString(),
          name: user.Fullname,
          email: user.email,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      await connectDB();
      let existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        existingUser = await User.create({
          Fullname: user.name,
          email: user.email,
          provider: account?.provider,
        });
      }

      // Store MongoDB _id in the `user` object for jwt callback
      (user as any).id = existingUser._id.toString();
      return true;
    },

    async jwt({ token, user }) {
      // First time login → user is available
      if (user) {
        token.id = (user as any).id; // Works for both credentials & OAuth
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      if (token) {
        session.user = {
          id: token.id,
          name: token.name,
          email: token.email,
        };
      }
      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET!,
});
