import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoClient } from "mongodb";
import { compare } from "bcryptjs";

let client;
async function connectDB() {
  if (!client) {
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
  }
  return client.db();
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const db = await connectDB();
        const user = await db.collection("users").findOne({ email: credentials.email });

        if (!user) {
          throw new Error("❌ User not found");
        }

        const isValid = await compare(credentials.password, user.password);
        if (!isValid) {
          throw new Error("❌ Invalid password");
        }

        return {
          id: user._id,
          email: user.email,
          role: user.role || "user",
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
