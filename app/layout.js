import './globals.css'
import { Vazirmatn } from 'next/font/google'

const vazir = Vazirmatn({ subsets: ['arabic'], weight: ['400','700'] })

export const metadata = {
  title: 'Tor.scarf',
  description: 'فروشگاه شال و روسری - Tor.scarf',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        {children}
      </body>
    </html>
  )
}
