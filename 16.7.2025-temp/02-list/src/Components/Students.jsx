import { Student } from "./Student";

export function Students(props) {
    let students = props.students.map((student, index) => {
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
            {students}
        </div>
    );
}
