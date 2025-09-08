"use client";
import { useCart } from "@/lib/store";
import { X, Trash2 } from "lucide-react";
import { useEffect } from "react";

export default function CartDrawer({ open, onClose }) {
  const { items, remove, clear } = useCart();

  useEffect(()=>{
    if(open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return ()=> document.body.style.overflow = "";
  }, [open]);

  return (
    <div className={`fixed inset-0 z-50 ${open? "":"pointer-events-none"}`}>
      <div className={`absolute inset-0 bg-black/40 transition ${open? "opacity-100":"opacity-0"}`} onClick={onClose} />
      <aside className={`absolute top-0 left-0 h-full w-full sm:w-[420px] bg-white p-4 shadow-2xl transition-transform ${open? "translate-x-0":"-translate-x-full"}`}>
        <div className="flex items-center justify-between border-b pb-3">
          <h3 className="text-lg font-bold">سبد خرید</h3>
          <button className="btn" onClick={onClose}><X/></button>
        </div>
        <div className="mt-4 space-y-3 max-h-[70vh] overflow-auto pr-1">
          {items.length===0 && <p className="text-gray-500">سبد شما خالی است.</p>}
          {items.map(it => (
            <div key={it.id} className="flex items-center justify-between card p-3">
              <div>
                <p className="font-semibold">{it.name}</p>
                <span className="text-sm text-gray-500">{it.qty} عدد • {(it.price*it.qty).toLocaleString()} تومان</span>
              </div>
              <button className="btn" onClick={()=>remove(it.id)}><Trash2/></button>
            </div>
          ))}
        </div>
        <div className="mt-4 border-t pt-3 flex gap-2">
          <button className="btn card flex-1" onClick={clear}>حذف همه</button>
          <button className="btn btn-primary flex-1">ادامه پرداخت</button>
        </div>
      </aside>
    </div>
  );
}
