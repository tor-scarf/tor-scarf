import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "ایمیل", type: "text" },
        password: { label: "رمز عبور", type: "password" },
      },
      async authorize(credentials) {
        // ✅ اینجا لاگیک ورود واقعی رو بنویس
        // برای تست:
        if (
          credentials.email === "test@test.com" &&
          credentials.password === "1234"
        ) {
          return { id: 1, name: "کاربر تست", email: credentials.email };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login", // صفحه لاگین خودت
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
