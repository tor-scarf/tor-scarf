"use client";
import { CATEGORIES } from "@/lib/products";

export default function CategoryFilter({ value, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={()=>onChange("all")}
        className={`btn ${value==="all" ? "btn-primary" : "card"}`}
      >همه</button>
      {CATEGORIES.map(c => (
        <button
          key={c.id}
          onClick={()=>onChange(c.id)}
          className={`btn ${value===c.id ? "btn-primary" : "card"}`}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
