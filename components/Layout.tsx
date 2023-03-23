import Link from "next/link"
import ProductaItem from "@/components/ProductaItem"
import data from '../utils/data'

export default function Home() {
  return (
    <>
    <nav className="flex h-12 item-center px-2 justify-between shadow-md">
      <Link legacyBehavior  href='/'><a className="text-lg font-bold" > Amazone</a></Link>
      <div>
      <Link legacyBehavior  href='/cart'> 
      <a className="p-2">Cart</a>
      </Link>
      <Link legacyBehavior  href='/login'>
        <a className="p-2">Login</a>
      </Link>
      </div>
    </nav>
    <div className="flex flex-col justify-between">
    <main className=" ml-automt-5 mt-4 px-3  flex justify-center ">
      {/* <ProductaItem/> */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-6 w-full">
      {data.products.map((product) => {
  return <ProductaItem product={product} key={product.slug} />;
})}
{data.products.map((product) => {
  return <ProductaItem product={product} key={product.slug} />;
})}
      </div>
    </main>
    <footer className="flex  justify-center items-center shadow-inner min-h-screen">
      <p>Copyright @ 2022 Amazone</p>
    </footer>
    </div>
  </>
  )

}