import Container from '@/components/Container'
import styles from './ProductListSection.module.scss'
import { CompanyProduct, getCopanyProductsList } from '@/services/getCopanyProductsList'
import ProductCard from '@/app/products/ui/ProductCard/ProductCard';

export const ProductListSection = async () => {
    const products = await getCopanyProductsList();
    console.log(products);
    
  return (
    <div className={styles.wrapper}>
        <Container>
            <div>
                <h2>Our Products</h2>
            </div>
            <div className={styles.productList}>
                {products.map((product: CompanyProduct) => (
                  <ProductCard key={product.id} image={product.filePath} name={product.title} description={product.description}/>
                ))}
            </div>
        </Container>
    </div>
  )
}
