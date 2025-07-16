export function FavoriteColors() {
    const colors = ["Red", "Blue", "Brown", "yellow", "Blue", "black"];

    let mapList = colors.map((color, index) => {
        return (
            <div style={{ margin: "10px" }} key={index} >
                <button style={{ backgroundColor: color, padding: "20px" }}>{color}</button>
                {color === "Blue" ? <span>cool color 😎</span> : <span></span>}
            </div >
        )

    })

    return (
        <>
            {mapList}
        </>
    )
}