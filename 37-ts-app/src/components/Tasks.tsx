import { Task } from "./Task";
import type TaskProps from "./Task";

interface TasksProps {
  tasks: TaskProps[];
  toggleDone: (id: number) => void;
}

export default function Tasks({ tasks, toggleDone }: TasksProps) {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} id={task.id} title={task.title} isDone={task.isDone} toggleDone={toggleDone} />
      ))}
    </>
  );
}
