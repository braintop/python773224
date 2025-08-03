import { useState } from 'react';
import { useTasks } from '../Contexts/TaskContext';
import { useNavigate } from 'react-router-dom';

export default function AddTask() {
  const [input, setInput] = useState('');
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input.trim());
      navigate('/tasks');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter new task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
