import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // 👇 اینجا فعلاً تستی گذاشتم
        if (credentials.email === "admin@test.com" && credentials.password === "1234") {
          return { id: "1", name: "Admin", email: "admin@test.com" }
        }
        return null
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
