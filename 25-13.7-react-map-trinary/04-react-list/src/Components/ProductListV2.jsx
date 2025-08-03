export function ProductListV2() {
    let products = [
        {
            name: "Ball",
            price: 10
        },
        {
            name: "Tshirts",
            price: 20
        },
        {
            name: "Gold",
            price: 2000
        },
        {
            name: "Car",
            price: 30000
        }
    ]

    // let displayProducts = products.map((product, index) => {
    //     return (
    //         <li key={index}>
    //             {product.name} - {product.price} -
    //             {product.price > 10 ? <span style={{ color: "red" }}> יקר</span> : <span style={{ color: "blue" }}>זול</span>}
    //         </li>
    //     )
    // })

    return (
        <>
            <h1>products</h1>
            <ul>
                {products.map((product, index) => {
                    return <li key={index}>
                        {product.name} - {product.price} -
                        {product.price > 10 ? <span style={{ color: "red" }}> יקר</span> : <span style={{ color: "blue" }}>זול</span>}
                    </li>
                })}
            </ul>
        </>
    )
}