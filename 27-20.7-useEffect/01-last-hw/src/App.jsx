import { Books } from './Components/Books'
import { Product } from './Components/Product'
import { Products } from './Components/Products'
import { Students } from './Components/Students'
function App() {

  let products = [
    {
      title: "ball",
      price: 30
    },
    {
      title: "tshirt",
      price: 100
    },
    {
      title: "car",
      price: 500
    },
    {
      title: "phone",
      price: 20
    }

  ]


  let students = [
    { firstname: "oren", lastname: "oranim", grade: 70 },
    { firstname: "uzi", lastname: "uzinu", grade: 80 },
    { firstname: "doooo", lastname: "gerula", grade: 70 },
    { firstname: "gii", lastname: "liri", grade: 95 },
    { firstname: "shoo", lastname: "piri", grade: 100 },

  ]

  let books = [
    { title: "harry", author: "polina" },
    { title: "barry", author: "olina" },
    { title: "jarry", author: "sholina" },
    { title: "narry", author: "nera" },

  ]
  return (
    <>
      <p>hello world</p>
      {/* <Product title="ball" price={4} /> */}
      <Products products={products} />
      <Students students={students} />
      <Books books={books} />
    </>
  )
}

export default App
