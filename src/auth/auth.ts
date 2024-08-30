import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import Google from "next-auth/providers/google";
import { env } from "@/env";

export const {
  handlers,
  auth: baseAuth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  theme: {
    logo: "/app-title.png",
  },
  providers: [
    Google({
      clientId: env.AUTH_GOOGLE_ID,
      clientSecret: env.AUTH_GOOGLE_SECRET,
    }),
  ],
});
