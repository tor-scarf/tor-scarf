export const metadata = {
  title: "Tor Scarf | فروشگاه لاکچری پوشاک",
  description: "فروشگاه مد با طراحی سه‌بعدی و تجربه خرید لوکس",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
