"use client";
import { useSession } from "next-auth/react";

export default function AdminDashboard() {
  const { data: session } = useSession();

  if (session?.user.role !== "admin") {
    return <p>شما اجازه دسترسی به این صفحه را ندارید</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">پنل ادمین</h1>
      <p>به بخش مدیریت محصولات بروید.</p>
    </div>
  );
}