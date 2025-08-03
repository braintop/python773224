import { createContext, useContext, useState, useEffect } from 'react';

//phase 1 - create context 
const TaskContext = createContext();

//phase 2 - useContext
export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTasks must be used within a UserProvider');
    }
    return context;
 };
 

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) setTasks(JSON.parse(saved));
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, isInitialized]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const value = { tasks, addTask };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};