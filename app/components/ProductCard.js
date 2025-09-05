use client;

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 border border-yellow-400 p-5 rounded-2xl flex flex-col items-center shadow-xl hover:scale-105 transition-transform duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-40 h-40 object-cover rounded-xl mb-4 border-4 border-yellow-200 shadow"
      />
      <h2 className="text-xl font-bold mb-2 text-black">{product.name}</h2>
      <p className="mb-4 text-black font-semibold">{product.price}</p>
      <button
        className="bg-black text-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-700 hover:text-white transition"
        onClick={() => alert(`سفارش ${product.name} ثبت شد ✅`)}
      >
        سفارش
      </button>
    </div>
  );
}
