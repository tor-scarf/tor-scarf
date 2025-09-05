"use client";

export default function Home() {
  const products = [
    { id: 1, name: "شال مشکی ساده", price: "150,000 تومان" },
    { id: 2, name: "شال طرحدار ابریشمی", price: "220,000 تومان" },
    { id: 3, name: "روسری نخی رنگی", price: "180,000 تومان" },
  ];

  return (
    <main className="min-h-screen bg-black text-yellow-400 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">🛍️ فروشگاه Tor.scarf</h1>
      <p className="mb-4 text-lg">بهترین شال و روسری‌ها برای شما</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-10/12">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-yellow-400 p-4 rounded-xl flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="mb-4">{product.price}</p>
            <button
              className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
              onClick={() => alert(`سفارش ${product.name} ثبت شد ✅`)}
            >
              سفارش
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
