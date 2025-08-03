import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './Contexts/TaskContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import AddTask from './pages/AddTask';
import Books from './pages/Books';
import AddBook from './pages/AddBook';
import { BookProvider } from './Contexts/BookContext';

export default function App() {
    return (
        <BookProvider>
            <TaskProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/addtask" element={<AddTask />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/addbook" element={<AddBook />} />

                </Routes>
            </TaskProvider>
        </BookProvider>
    );
}
