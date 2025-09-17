import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/tasks">Tasks</Link> |
      <Link to="/addtask">Add Task</Link>|
      <Link to="/addbook">Add Book</Link>|
      <Link to="/books">Books</Link>

    </nav>
  );
}
