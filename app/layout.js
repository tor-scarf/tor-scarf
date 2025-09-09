import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Tor Scarf | فروشگاه لاکچری پوشاک",
  description: "فروشگاه مد با طراحی سه‌بعدی و تجربه خرید لوکس",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
