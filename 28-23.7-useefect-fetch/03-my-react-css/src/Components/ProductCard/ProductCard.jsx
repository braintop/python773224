import styles from "./ProductCard.module.css"

export function ProductCard({ product }) {


    return (
        <div className={styles.card}>
            <h1 className={styles.title}>{product.name}</h1>
            <p>{product.description} </p>
            <button className={styles.btn}>Add to cart</button>
        </div>
    )
}