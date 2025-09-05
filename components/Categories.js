export default function Categories() {
  const categories = [
    { id: 1, name: "پوشاک زنانه", image: "https://via.placeholder.com/150" },
    { id: 2, name: "پوشاک مردانه", image: "https://via.placeholder.com/150" },
    { id: 3, name: "پوشاک بچگانه", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {categories.map((cat) => (
        <div key={cat.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
          <img src={cat.image} alt={cat.name} className="w-24 h-24 object-cover mb-2 rounded" />
          <h2 className="text-lg font-semibold">{cat.name}</h2>
        </div>
      ))}
    </div>
  );
}
