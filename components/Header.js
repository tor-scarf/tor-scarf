export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-yellow-600">🛍️ Tor.scarf</h1>
        <input
          type="text"
          placeholder="جستجو..."
          className="border px-3 py-2 rounded-lg w-1/2"
        />
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
          🛒 سبد خرید
        </button>
      </div>
    </header>
  )
}
