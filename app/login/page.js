"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn("credentials", { email, password, callbackUrl: "/dashboard/user" });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-80">
        <h1 className="text-lg font-bold mb-4">ورود</h1>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="ایمیل" className="w-full p-2 border rounded mb-2" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
          placeholder="رمز عبور" className="w-full p-2 border rounded mb-4" />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">ورود</button>
      </form>
    </div>
  );
}