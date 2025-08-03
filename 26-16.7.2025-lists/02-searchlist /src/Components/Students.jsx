import { use, useState } from "react";
import { Student } from "./Student";

export function Students({ students }) {
    const [search, setSearch] = useState("")
    const filteredStudents = students.filter((student) => {

        let fullName = student.firstname + " " + student.lastname
        return fullName.toLowerCase().includes(search.toLowerCase())

    })
    let finalStudents = filteredStudents.map((student, index) => {
        return (
            <div key={index}>
                <Student
                    firstname={student.firstname}
                    lastname={student.lastname}
                    grade={student.grade}
                />
            </div>
        );
    });
    return (
        <div>
            <h2>חיפוש סטודנט:</h2>
            <input type="text" placeholder="search..." onChange={(e) => setSearch(e.target.value)}></input>// Ar
            {finalStudents}
        </div>
    );
}
