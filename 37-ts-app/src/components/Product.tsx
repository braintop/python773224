export default interface ProductProps {
    id: number;
    name: string;
    price: number;
    removeProduct?: (id: number) => void;
}
export  function Product({ id, name, price, removeProduct }: ProductProps) {
    function handleRemoveProduct() {
        if (removeProduct) {
            removeProduct(id);
        }
    }
    return (
        <div>
            <span>{id} </span>
            <span>{name} </span>
            <span>{price}  </span>
            <button onClick={handleRemoveProduct}>Remove</button>
        </div>
    )
}