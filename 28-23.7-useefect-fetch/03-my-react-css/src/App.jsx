import { ProductCard } from './Components/ProductCard/ProductCard'
import { ProductList } from './Components/ProductList/ProductList'
function App() {

  let p1 = {
    name: "Laptop",
    description: "Lightweight and powerful",
  }
  let products = [
    { id: 1, name: "Laptop", description: "Lightweight and powerful" },
    { id: 2, name: "Headphones", description: "Noise-cancelling magic" },
    { id: 3, name: "Smartwatch", description: "Track your fitness in style" },
    { id: 4, name: "Smartwatch", description: "Track your fitness in style" },
    { id: 3, name: "Smartwatch", description: "Track your fitness in style" },
    { id: 3, name: "Smartwatch", description: "Track your fitness in style" },
    { id: 3, name: "Smartwatch", description: "Track your fitness in style" },
    { id: 3, name: "Smartwatch", description: "Track your fitness in style" },
    { id: 3, name: "Smartwatch", description: "Track your fitness in style" },
  ]
  return (
    <>
      <h1>hello css</h1>
      {/* <ProductCard product={p1} /> */}
      <ProductList products={products} />


    </>
  )
}

export default App
