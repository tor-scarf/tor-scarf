import './globals.css'

export const metadata = {
  title: 'Tor.scarf',
  description: 'فروشگاه آنلاین لباس و شال',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  )
}
