import { AgeChecker } from "./Components/AgeChecker"
function App() {

  return (
    <>
      <AgeChecker
        buttonText="check"
        adultMessage="welecome to the club"
        minorMessage="no enter below 18 years old"
      />
    </>
  )
}


export default App
