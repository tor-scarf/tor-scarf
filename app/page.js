"use client";

export default function Home() {
  const products = [
    { id: 1, name: "شال مشکی ساده", price: "150,000 تومان" },
    { id: 2, name: "شال طرحدار ابریشمی", price: "220,000 تومان" },
    { id: 3, name: "روسری نخی رنگی", price: "180,000 تومان" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* هدر */}
      <header className="w-full flex justify-between items-center px-8 py-4 bg-black/50 backdrop-blur-md border-b border-yellow-400">
        <h1 className="text-2xl font-bold">🛍️ Tor.scarf</h1>
        <nav className="flex gap-6 text-lg">
          <a href="#" className="hover:text-yellow-300">خانه</a>
          <a href="#" className="hover:text-yellow-300">محصولات</a>
          <a href="#" className="hover:text-yellow-300">تماس</a>
        </nav>
      </header>

      {/* متن معرفی */}
      <section className="mt-10 text-center">
        <h2 className="text-3xl font-bold mb-4">به فروشگاه Tor.scarf خوش آمدید</h2>
        <p className="text-lg text-yellow-200">بهترین شال و روسری‌ها برای شما ✨</p>
      </section>

      {/* محصولات */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 mt-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-yellow-400 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-yellow-400/50 transition transform duration-300 flex flex-col items-center bg-black/40"
          >
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="mb-4">{product.price}</p>
            <button
              className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-black px-6 py-2 rounded-full shadow-md hover:from-yellow-500 hover:to-yellow-400 transition"
              onClick={() => alert(`سفارش ${product.name} ثبت شد ✅`)}
            >
              سفارش
            </button>
          </div>
        ))}
      </section>

      {/* فوتر */}
      <footer className="mt-16 py-6 border-t border-yellow-400 w-full text-center text-yellow-300 text-sm">
        © 2025 Tor.scarf - تمامی حقوق محفوظ است
      </footer>
    </main>
  );
}
