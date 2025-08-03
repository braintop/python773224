import { Counter } from "./Components/Counter"
import { Greeting } from "./Components/Greeting"
function App() {
    return (
        <>
            <h1>Components Props</h1>
            <Greeting firstname="Arielle" lastname="geva" />
            <Counter start={5} owner="Laura:)" />
            <Counter start={100} owner="MemoUz"/>
            <Counter start={3} owner="Arielle"/>

        </>
    )
}

export default App
