"use client";

export default function Home(){
  const products = [
    { id: 1, name: 'آجری', price: 120000, image: '/images/shal1.jpg' },
    { id: 2, name: 'موکا', price: 130000, image: '/images/shal2.jpg' },
    { id: 3, name: 'سبز ماچا', price: 140000, image: '/images/roosari1.jpg' },
    { id: 4, name: 'نسکافه‌ای', price: 150000, image: '/images/shal1.jpg' },
    { id: 5, name: 'کِرم', price: 160000, image: '/images/shal2.jpg' },
    { id: 6, name: 'مشکی', price: 170000, image: '/images/roosari1.jpg' },
    { id: 7, name: 'زغالی', price: 180000, image: '/images/shal1.jpg' },
    { id: 8, name: 'قهوه‌ای', price: 190000, image: '/images/shal2.jpg' },
    { id: 9, name: 'یشمی', price: 200000, image: '/images/roosari1.jpg' },
    { id: 10, name: 'طوسی', price: 210000, image: '/images/shal1.jpg' },
    { id: 11, name: 'بنفش', price: 220000, image: '/images/shal2.jpg' },
    { id: 12, name: 'زرشکی', price: 230000, image: '/images/roosari1.jpg' },
    { id: 13, name: 'آبی نفتی', price: 240000, image: '/images/shal1.jpg' },
    { id: 14, name: 'سرخابی', price: 250000, image: '/images/shal2.jpg' },
    { id: 15, name: 'نارنجی', price: 260000, image: '/images/roosari1.jpg' },
    { id: 16, name: 'خردلی', price: 270000, image: '/images/shal1.jpg' },
    { id: 17, name: 'بژ', price: 280000, image: '/images/shal2.jpg' },
    { id: 18, name: 'شیری', price: 290000, image: '/images/roosari1.jpg' },
  ];
  return (
    <main className="min-h-screen">
      <header className="bg-black/60 sticky top-0 z-40 backdrop-blur-sm border-b border-yellow-700">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-2xl font-extrabold text-yellow-400">Tor.scarf</h1>
          <nav className="hidden md:flex gap-6 text-sm text-gray-200">
            <a href="#products" className="hover:text-yellow-300">محصولات</a>
            <a href="#about" className="hover:text-yellow-300">درباره ما</a>
            <a href="#contact" className="hover:text-yellow-300">تماس</a>
          </nav>
        </div>
      </header>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-yellow-400 text-center mb-6">رنگ‌بندی کامل شال‌ها</h2>
          <p className="text-center text-gray-300 mb-10">کلیک روی سفارش برای افزودن به سبد (نمونه)</p>
          <div id="products" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.id} className="product-card">
                <div className="w-full h-56 relative rounded-lg overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="text-yellow-300 mt-2">{p.price} تومان</p>
                  <button className="mt-4 btn-gold" onClick={() => alert(`سفارش ${p.name} ثبت شد!`)}>سفارش</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-400">© 2025 Tor.scarf - تمامی حقوق محفوظ است</footer>
    </main>
  );
}