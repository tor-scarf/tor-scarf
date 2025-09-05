import './globals.css'

export const metadata = {
  title: 'Tor.scarf',
  description: 'فروشگاه اینترنتی لباس برند Tor.scarf',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
