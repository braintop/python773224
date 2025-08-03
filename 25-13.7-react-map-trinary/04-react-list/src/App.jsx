import { ProductList } from "./Components/ProductList"
import { StudentList } from "./Components/StudentList"
import { ProductListV2 } from "./Components/ProductListV2"
import { TaskList } from "./Components/TaskList"
import { FilteredList } from "./Components/FilteredList"
import { FilteredListV2 } from "./Components/FilteredListV2"

function App() {

  return (
    <>
      <h1>map</h1>
      <StudentList />
      <ProductList />
      <p>--------------------</p>
      <ProductListV2 />
      <p>--------------------</p>
      <TaskList />
      <p>--------------------</p>
      <FilteredList />
      <p>--------------------</p>
      <FilteredListV2 />

    </>
  )
}

export default App
