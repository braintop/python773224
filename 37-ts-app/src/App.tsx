import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Input from './components/Input'
import Students from './components/Students'
import Tasks from './components/Tasks'
import type TaskProps from './components/Task'
import ProductList from './components/ProductList'
import type ProductProps from './components/Product'

function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState<TaskProps[]>([  
    { id: 1, title: "take uzi home", isDone: true },
    { id: 2, title: "buy tshirt", isDone: false },
    { id: 3, title: "play bla", isDone: true },
  ])

  function toggleDone(id: number): void {
    alert(`Task ${id} is done`);
    let newTasks: TaskProps[] = tasks.map((task) => task.id === id ? { ...task, isDone: !task.isDone } : task);
    setTasks(newTasks);
  }
  const [products, setProducts] = useState<ProductProps[]>([
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 },
  ])

  function removeProduct(id: number): void {
    let newProducts: ProductProps[] = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  }


  const students = [
    { id: 1, name: "Dana", grade: 90 },
    { id: 2, name: "Amit", grade: 85 },
    { id: 3, name: "Roni", grade: 92 },
  ]


  return (
    <>
    <Counter initialValue={1} owner="Arielle" step={1} />
    <Counter initialValue={10} owner="Laura" step={10} />
    <Counter initialValue={20} owner="MemoUz" step={20} />

    <Input placeholder="Enter your ilya" />
    <Students students={students} />

    <Tasks tasks={tasks} toggleDone={toggleDone} />
    <ProductList products={products} removeProduct={removeProduct} />
    </>
  )
}

export default App
