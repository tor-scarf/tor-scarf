"use client";
import Image from "next/image";
import { useCart } from "@/lib/store";

export default function ProductCard({ p }) {
  const { add } = useCart();
  return (
    <div className="card overflow-hidden group">
      <div className="relative h-64">
        <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{p.name}</h3>
          <span className="text-brand-600 font-bold">{p.price.toLocaleString()} تومان</span>
        </div>
        <div className="mt-4 flex justify-between">
          <span className="badge">{p.category}</span>
          <button onClick={()=>add(p)} className="btn btn-primary">افزودن</button>
        </div>
      </div>
    </div>
  );
}
