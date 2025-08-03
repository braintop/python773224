import { Product } from "./Product"

export function Products({ products }) {

    let mapProducts = products.map((product, index) => {
        return (
            <Product key={index} title={product.title} price={product.price} />
        )
    })

    return (
        <>
            <h1>Products</h1>
            {mapProducts}
        </>
    )

}