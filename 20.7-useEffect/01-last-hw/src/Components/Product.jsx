export function Product({ title, price }) {
    return (
        <div style={{ border: "3px solid brown", margin: "10px", padding: "5px" }}>
            <span>{title}</span>-
            <span style={{ color: price > 50 ? "blue" : "red" }}>{price}</span>
        </div>
    )
}