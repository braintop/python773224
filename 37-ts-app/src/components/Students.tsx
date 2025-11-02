interface StudentsProps {
    students: {
        id: number;
        name: string;
        grade: number;
    }[];
}
export default function Students({students}: StudentsProps) {

    return (
        <div>
            <h2>Students</h2>
            {students.map((student) => (
                <div key={student.id}>
                    <h3>{student.name}</h3>
                    <p>{student.grade}</p>
                </div>
            ))}
        </div>
    )
}