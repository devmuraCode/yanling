
import { Header } from "@/components/Header/Header"
import { AllProducts } from "./ui/Products/AllProducts"
import bgProduct from '../../assets/products.jpg'
export const Products = () => {
  return (
    <div>
      <Header title="Standard Products" description="Dedicated Computing’s range of off-the-shelf computing systems" image={bgProduct}/>
      <AllProducts/>
    </div>
  )
}
export default Products
