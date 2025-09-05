export default function ProductsGrid() {
  const products = [
    { id: 1, name: "شال مشکی ساده", price: "150,000 تومان", image: "https://via.placeholder.com/200" },
    { id: 2, name: "شال طرحدار ابریشمی", price: "220,000 تومان", image: "https://via.placeholder.com/200" },
    { id: 3, name: "روسری نخی رنگی", price: "180,000 تومان", image: "https://via.placeholder.com/200" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">محصولات</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-2 rounded" />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-lg">
              سفارش
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
