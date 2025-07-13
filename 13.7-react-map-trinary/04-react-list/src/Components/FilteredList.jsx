export function FilteredList() {
    const products = [
        { name: 'עכבר', inStock: true },
        { name: 'מקלדת', inStock: false },
        { name: 'מסך', inStock: true },
        { name: 'מדפסת', inStock: false },
        { name: 'מטען', inStock: true },
    ];
    let filterInstock = products.filter((product) => product.inStock)
    let mapProducts = filterInstock.map((product, index) => {
        return (
            <li key={index}>{product.name}</li>
        )
    })
    return (
        <div>
            <h1>Filter list</h1>
            <ul>
                {mapProducts}
            </ul>
        </div>
    )
}