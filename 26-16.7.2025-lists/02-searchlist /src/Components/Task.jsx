export function Task(props) {
    return (
        <>
            <p style={{ fontSize: "30px", borderRadius: "10px ", padding: "10px", border: "5px solid brown", color: props.isDone ? "green" : "red" }}>{props.title}-{props.isDone ? "👍" : "❌"}</p >
        </>
    )
}