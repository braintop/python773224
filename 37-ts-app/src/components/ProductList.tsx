import {Product} from "./Product";
import type ProductProps from "./Product";

interface ProductListProps {
    products: ProductProps[];
    removeProduct?: (id: number) => void;
}
export default function ProductList({ products, removeProduct }: ProductListProps) {
    
    return (
        <>
        <h1>Product List</h1>
        <ul>        
            {products.map((product) => (
                <li key={product.id}>
                    <Product id={product.id} name={product.name} price={product.price} removeProduct={removeProduct} />
                </li>
            ))}
        </ul>
        </>
    )
}