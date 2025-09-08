"use client";
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import CartDrawer from "@/components/CartDrawer";
import { PRODUCTS } from "@/lib/products";

export default function Home() {
  const [cat, setCat] = useState("all");
  const [open, setOpen] = useState(false);
  const items = useMemo(() => cat==="all" ? PRODUCTS : PRODUCTS.filter(p=>p.category===cat), [cat]);

  return (
    <>
      <Navbar onOpenCart={()=>setOpen(true)} />
      <Hero3D />

      <section className="container py-8" id="products">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">محصولات منتخب</h2>
          <CategoryFilter value={cat} onChange={setCat} />
        </div>
        <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {items.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      <footer className="mt-16">
        <div className="container py-10 text-center text-gray-500">
          © 2025 Tor.Scarf — طراحی مدرن سه‌بعدی
        </div>
      </footer>

      <CartDrawer open={open} onClose={()=>setOpen(false)} />
    </>
  );
}
