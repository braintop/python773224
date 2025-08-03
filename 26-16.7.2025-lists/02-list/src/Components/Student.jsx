export function Student({ firstname, lastname, grade }) {


    return (
        <>
            <span
                style={{ color: grade > 60 ? "green" : "red" }}>
                {firstname}-{lastname}
            </span>
            <span>-{grade}</span>
        </>
    )
}

// export function Student(props) {
//     return (
//         <>
//             <span
//                 style={{ color: props.grade > 60 ? "green" : "red" }}>
//                 {props.firstname}-{propslastname}
//             </span>
//             <span>-{grade}</span>
//         </>
//     )
// }



