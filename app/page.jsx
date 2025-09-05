'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Trash2, Phone, Mail, Instagram } from "lucide-react";

export default function TorscarfSite() {
  const products = [
    { id: 1, name: "پیراهن مشکی", price: 480000, img: "https://via.placeholder.com/400x400?text=Shirt+1" },
    { id: 2, name: "کت زنانه", price: 920000, img: "https://via.placeholder.com/400x400?text=Jacket" },
    { id: 3, name: "شلوار جین", price: 650000, img: "https://via.placeholder.com/400x400?text=Jeans" },
  ];

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setShowCart(true);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const totalPrice = cart.reduce((sum, p) => sum + p.price, 0);

  const handleOrder = () => {
    if (cart.length === 0) return;
    const orderText = cart.map((p, i) => `${i + 1}. ${p.name} - ${p.price.toLocaleString()} تومان`).join("%0A");
    const finalText = `سفارش جدید از سایت Tor.scarf:%0A${orderText}%0A---%0Aجمع کل: ${totalPrice.toLocaleString()} تومان`;
    window.open(`https://wa.me/989331802811?text=${finalText}`, "_blank");
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div dir="rtl" lang="fa" className="min-h-screen bg-gradient-to-b from-black to-neutral-900 text-white selection:bg-yellow-400">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-yellow-500">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="font-extrabold text-xl tracking-tight text-yellow-400">Tor.scarf</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <button onClick={() => scrollTo('products')} className="hover:text-yellow-400">محصولات</button>
            <button onClick={() => scrollTo('about')} className="hover:text-yellow-400">درباره ما</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-yellow-400">تماس</button>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setShowCart(true)} className="rounded-2xl bg-yellow-500 text-black hover:bg-yellow-400 flex items-center gap-2 px-3 py-2">
              <ShoppingBag className="w-4 h-4" /> ({cart.length})
            </button>
          </div>
        </div>
      </header>

      {/* Products */}
      <section id="products" className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-yellow-400 mb-8">محصولات</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <motion.div key={p.id} whileHover={{ scale: 1.05 }} className="rounded-2xl bg-neutral-800 shadow-lg overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-sm text-gray-300">{p.price.toLocaleString()} تومان</p>
                <button onClick={() => addToCart(p)} className="mt-3 rounded-xl bg-yellow-500 text-black hover:bg-yellow-400 w-full py-2">
                  افزودن به سبد خرید
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">درباره ما</h2>
        <p className="text-gray-300 leading-relaxed">
          برند <span className="text-yellow-400">Tor.scarf</span> با هدف ارائه پوشاک باکیفیت و مدرن برای خانم‌ها ایجاد شد. ما ترکیبی از طراحی خاص و کیفیت عالی را ارائه می‌دهیم.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">ارتباط با ما</h2>
        <div className="flex flex-col gap-4">
          <a href="https://wa.me/989331802811" target="_blank" className="flex items-center gap-2 hover:text-yellow-400">
            <Phone className="w-4 h-4" /> واتساپ: 09331802811
          </a>
          <a href="mailto:info@torscarf.com" className="flex items-center gap-2 hover:text-yellow-400">
            <Mail className="w-4 h-4" /> info@torscarf.com
          </a>
          <a href="https://instagram.com/torscarf" target="_blank" className="flex items-center gap-2 hover:text-yellow-400">
            <Instagram className="w-4 h-4" /> @torscarf
          </a>
        </div>
      </section>

      {/* Cart */}
      {showCart && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-neutral-900 rounded-2xl p-6 w-96 max-w-full">
            <h2 className="text-xl font-bold text-yellow-400 mb-4">سبد خرید</h2>
            {cart.length === 0 ? (
              <p className="text-gray-400">سبد خرید خالی است.</p>
            ) : (
              <ul className="space-y-3">
                {cart.map((p, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-neutral-700 pb-2">
                    <span>{p.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{p.price.toLocaleString()} تومان</span>
                      <button onClick={() => removeFromCart(i)} className="text-red-400 hover:text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-4">
              <p className="text-gray-300">جمع کل: {totalPrice.toLocaleString()} تومان</p>
              <button onClick={handleOrder} className="mt-3 w-full rounded-xl bg-yellow-500 text-black hover:bg-yellow-400 py-2">
                ثبت سفارش در واتساپ
              </button>
              <button onClick={() => setShowCart(false)} className="mt-2 w-full rounded-xl bg-neutral-700 text-gray-200 hover:bg-neutral-600 py-2">
                بستن
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
