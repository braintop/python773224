export function StudentList() {
    let names = ["Or", "Sergei", "Memo", "Laura"]

    // <ul>
    //    <li>Or</li>
    //    <li>Sergei</li>
    //    <li>Memo</li>
    // <ul> 

    let students = names.map((item, index) => <li key={index}>{item}</li>)
    return (
        <>
            <p>StudentList</p>
            <ul>
                {students}
            </ul>
        </>
    )
}