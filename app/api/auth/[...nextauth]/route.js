import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "ایمیل", type: "text" },
        password: { label: "رمز عبور", type: "password" }
      },
      async authorize(credentials) {
        // تست ساده: هر ایمیل + پسوردی وارد بشه لاگین می‌کنه
        if (credentials?.email && credentials?.password) {
          return { id: "1", name: "کاربر تستی", email: credentials.email };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: "/login", // مسیر صفحه لاگین خودت
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
