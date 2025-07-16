export function FavoriteColorsShortCircuitRendering() {
    const colors = ["Red", "Blue", "Brown"];

    let mapList = colors.map((color, index) => {
        return (
            <div key={index}>
                {    // Short-circuit rendering
                    color === "Blue" &&
                    <>
                        <button>{color}</button>
                        <span>cool button</span>
                    </>
                }
            </div >
        )

    })

    return (
        <>
            {mapList}
        </>
    )
}