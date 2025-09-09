"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 to-purple-400">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h1 className="text-2xl font-bold text-center mb-6">ورود به حساب</h1>

        <button 
          onClick={() => signIn("google")}
          className="w-full bg-red-500 text-white py-2 rounded-lg mb-3"
        >
          ورود با Google
        </button>

        <button 
          onClick={() => signIn("github")}
          className="w-full bg-gray-800 text-white py-2 rounded-lg mb-3"
        >
          ورود با GitHub
        </button>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            signIn("credentials", { email, password });
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="ایمیل"
            className="w-full border p-2 rounded mb-2"
          />
          <input
            type="password"
            name="password"
            placeholder="رمز عبور"
            className="w-full border p-2 rounded mb-4"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
}
  
