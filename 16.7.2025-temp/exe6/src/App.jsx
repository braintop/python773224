import { ConditionalGreeting } from "./Components/ConditionalGreeting"
import { FavoriteColors } from "./Components/FavoriteColors"
import { FavoriteColorsShortCircuitRendering } from "./Components/FavoriteColorsShortCircuitRendering"

function App() {

  return (
    <>
      <h1>Continue exe</h1>
      <FavoriteColorsShortCircuitRendering />
      <FavoriteColors />
      <ConditionalGreeting />
    </>
  )
}

export default App
