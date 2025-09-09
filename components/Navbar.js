"use client";
import { ShoppingBag, User, Search } from "lucide-react";
import { useCart } from "@/lib/store";
import { useState } from "react";

export default function Navbar({ onOpenCart }) {
  const { items } = useCart();
  const count = items.reduce((a,b)=>a+b.qty,0);
  const [q, setQ] = useState("");

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-white/60">
      <div className="container h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-brand-600">Tor.Scarf</a>
        <div className="hidden md:flex items-center gap-2 rounded-2xl bg-gray-100 px-3 py-2 w-96">
          <Search size={18} />
          <input
            className="bg-transparent outline-none flex-1"
            placeholder="جستجوی محصول، مدل، رنگ..."
            value={q}
            onChange={(e)=>setQ(e.target.value)}
          />
        </div>
        <nav className="flex items-center gap-3">
          <a className="btn" href="/login"><User className="mr-2" size={18}/>ورود</a>
          <button className="btn btn-primary" onClick={onOpenCart}>
            <ShoppingBag className="mr-2" size={18}/> سبد خرید
            {count>0 && <span className="badge mr-2">{count}</span>}
          </button>
        </nav>
      </div>
    </header>
  );
}
