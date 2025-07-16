export function Student(props) {


    return (
        <>
            <span
                style={{ color: props.grade > 60 ? "green" : "red" }}>
                {props.firstname}-{props.lastname}
            </span>
            <span>-{props.grade}</span>
        </>
    )
}