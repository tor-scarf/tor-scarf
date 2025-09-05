import Header from '../components/Header'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import ProductsGrid from '../components/ProductsGrid'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-6 grid grid-cols-12 gap-6">
        <div className="col-span-9">
          <Slider />
          <Categories />
          <ProductsGrid />
        </div>
        <div className="col-span-3">
          <Sidebar />
        </div>
      </main>
      <Footer />
    </div>
  )
}