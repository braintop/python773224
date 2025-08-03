export function FilteredListV2() {
    const products = [
        { name: 'עכבר', inStock: true },
        { name: 'מקלדת', inStock: false },
        { name: 'מסך', inStock: true },
        { name: 'מדפסת', inStock: false },
        { name: 'מטען', inStock: true },
    ];
    let filterMapInstock = products
        .filter((product) => product.inStock)
        .map((item, index) => {
            return (
                <li key={index}>{item.name}</li>
            )
        })

    return (
        <div>
            <h1>Filter list</h1>
            <ul>
                {filterMapInstock}
            </ul>
        </div>
    )
}