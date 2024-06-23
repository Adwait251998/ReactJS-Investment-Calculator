import Header from "./components/Header"
import UserInputs from "./components/UserInputs"
import Results from "./components/Results"
import { useState } from "react"

function App() {

  const  [intialInvestmentParameter, setInvestmentParameters]=useState({
    initialInvestment:100,
    annualInvestment:1200,
    expectedReturn:6,
    duration:1
})

function HandleUserInput(inputIdentifier, newInputValue){
  setInvestmentParameters(prevUserInput =>{

      return{
          ...prevUserInput,
          [inputIdentifier]: parseInt(newInputValue)
      };
  })
}
  return (
    <div>
     <Header/>
     <UserInputs intialInvestmentParameter={intialInvestmentParameter}  onChangeInputs={HandleUserInput} />
     <Results resultValues={intialInvestmentParameter} />
    </div>
   
  )
}

export default App
