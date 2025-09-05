"use client";

export default function Home() {
  const products = [
    { id: 1, name: "شال مشکی ساده", price: "150,000 تومان", img: "/scarf1.jpg" },
    { id: 2, name: "شال طرحدار ابریشمی", price: "220,000 تومان", img: "/scarf2.jpg" },
    { id: 3, name: "روسری نخی رنگی", price: "180,000 تومان", img: "/scarf3.jpg" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-yellow-900 text-white">
      {/* هدر */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 shadow-md">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-yellow-400">🛍️ Tor.scarf</h1>
          <ul className="flex gap-6 text-sm">
            <li className="hover:text-yellow-300 cursor-pointer">خانه</li>
            <li className="hover:text-yellow-300 cursor-pointer">محصولات</li>
            <li className="hover:text-yellow-300 cursor-pointer">درباره ما</li>
            <li className="hover:text-yellow-300 cursor-pointer">تماس</li>
          </ul>
        </nav>
      </header>

      {/* بخش بنر */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-lg">
          خوش آمدید به فروشگاه Tor.scarf
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          ✨ بهترین شال و روسری‌ها برای شما ✨
        </p>
        <button className="mt-6 bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-300 transition">
          مشاهده محصولات
        </button>
      </section>

      {/* محصولات */}
      <section id="products" className="py-20 bg-black/60">
        <h3 className="text-center text-3xl font-bold text-yellow-400 mb-12">
          محصولات ما
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 text-center">
                <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                <p className="text-yellow-300 mb-4">{product.price}</p>
                <button
                  className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-bold hover:bg-yellow-300 transition"
                  onClick={() => alert(`سفارش ${product.name} ثبت شد ✅`)}
                >
                  سفارش
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* فوتر */}
      <footer className="bg-black/90 text-center py-6 mt-20">
        <p className="text-gray-400 text-sm">
          © 2025 Tor.scarf – تمامی حقوق محفوظ است
        </p>
      </footer>
    </main>
  );
}
