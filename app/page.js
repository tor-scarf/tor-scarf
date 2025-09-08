"use client";
import { useState } from "react";

export default function Home() {
  const [products] = useState([
    { id: 1, name: "شال مشکی ساده", price: "250,000", image: "https://picsum.photos/400/400?1" },
    { id: 2, name: "شال رنگی تابستونی", price: "180,000", image: "https://picsum.photos/400/400?2" },
    { id: 3, name: "شال مجلسی براق", price: "320,000", image: "https://picsum.photos/400/400?3" },
  ]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* هدر */}
      <header className="p-6 flex justify-between items-center shadow-md bg-white sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-pink-600">🧕 فروشگاه شال تور</h1>
        <nav className="flex gap-6">
          <a href="/" className="hover:text-pink-500">خانه</a>
          <a href="/dashboard" className="hover:text-pink-500">داشبورد</a>
          <a href="/admin" className="hover:text-pink-500">ادمین</a>
        </nav>
      </header>

      {/* بنر */}
      <section className="text-center py-20 bg-pink-100">
        <h2 className="text-4xl font-bold text-pink-700 mb-4">جدیدترین مدل‌های شال</h2>
        <p className="text-gray-600 mb-6">با بهترین کیفیت و قیمت مناسب 🌸</p>
        <a
          href="#products"
          className="px-6 py-3 bg-pink-600 text-white rounded-xl shadow hover:bg-pink-700 transition"
        >
          مشاهده محصولات
        </a>
      </section>

      {/* محصولات */}
      <section id="products" className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition"
          >
            <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-pink-600 font-bold mt-2">{item.price} تومان</p>
              <button className="mt-4 px-5 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
                افزودن به سبد
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* فوتر */}
      <footer className="text-center py-6 bg-gray-100 mt-10">
        <p className="text-gray-600">© 2025 فروشگاه شال تور | همه حقوق محفوظ است</p>
      </footer>
    </main>
  );
}
