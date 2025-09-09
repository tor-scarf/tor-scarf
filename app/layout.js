export const metadata = {
  title: "Tor Scarf | فروشگاه لاکچری پوشاک",
  description: "فروشگاه مد با طراحی سه‌بعدی و تجربه خرید لوکس",
};

import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-pink-50 text-gray-800">
        {/* ناوبار بالا */}
        <Navbar />

        {/* محتوای اصلی صفحه */}
        <main className="container mx-auto px-4 py-8">{children}</main>

        {/* فوتر پایین */}
        <footer className="mt-16">
          <div className="container py-10 text-center text-gray-500">
            © 2025 Tor.Scarf — طراحی مدرن سه‌بعدی
          </div>
        </footer>
      </body>
    </html>
  );
}
