import { ProductCard } from "../ProductCard/ProductCard"
import styles from "./ProductList.module.css"

export function ProductList({ products }) {

    return (
        <div className={styles.container}>
            <h2>Our products</h2>
            <div className={styles.grid}>
                {
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    )



}
