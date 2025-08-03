import { Task } from "./Task"
export function Tasks(props) {
    let tasks = props.tasks.map((task, index) =>
        <Task key={index}
            title={task.title}
            isDone={task.isDone}
        />)

    return (
        <>
            {tasks}
        </>
    )
}