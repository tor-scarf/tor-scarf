import "./globals.css";
import { Vazirmatn } from "next/font/google";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Tor.scarf",
  description: "فروشگاه آنلاین شال و روسری",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.className} bg-gradient-to-br from-black via-gray-900 to-yellow-900 text-yellow-400`}>
        {children}
      </body>
    </html>
  );
}
