import { useTasks } from '../Contexts/TaskContext';

export default function Tasks() {
  const { tasks } = useTasks();

  return (
    <div>
      <h2>Tasks List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}


