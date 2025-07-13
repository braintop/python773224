export function StudentList() {
    let names = ["Or", "Sergei", "Memo", "Laura"]
    //1. properties 
    //2. functions 
    //3. jsx + html 


    // <ul>
    //    <li>Or</li>
    //    <li>Sergei</li>
    //    <li>Memo</li>
    // <ul> 

    let students = names.map((item) => <li>{item}</li>)
    return (
        <>
            <p>StudentList</p>
            <ul>
                {students}
            </ul>
        </>
    )
}