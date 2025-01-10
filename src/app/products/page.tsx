
import { Header } from "@/components/Header/Header"
import { AllProducts } from "./ui/Products/AllProducts"
import bgProduct from '../../assets/products.jpg'
import { ProductsNew } from "./ui/ProductsNew/ProductsNew"
export default function Products () {
  return (
    <div>
      {/* <Header title="Standard Products" description="Dedicated Computing’s range of off-the-shelf computing systems" image={bgProduct}/> */}
      <ProductsNew/>
    </div>
  )
}