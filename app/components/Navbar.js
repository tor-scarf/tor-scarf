"use client";
import { useRouter } from "next/navigation";

export default function Navbar({ onOpenCart }) {
  const router = useRouter();

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* لوگو */}
        <h1
          onClick={() => router.push("/")}
          className="text-xl font-bold text-pink-600 cursor-pointer"
        >
          Tor.Scarf
        </h1>

        {/* منو */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/login")}
            className="flex items-center gap-1 text-gray-700 hover:text-pink-600"
          >
            <span className="material-icons">person</span>
            ورود
          </button>

          <button
            onClick={onOpenCart}
            className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-lg flex items-center gap-2"
          >
            <span className="material-icons">shopping_cart</span>
            سبد خرید
          </button>
        </div>
      </nav>
    </header>
  );
}
