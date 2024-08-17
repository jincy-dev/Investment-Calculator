import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInputValue, setUserInputValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInputValue.duration >= 1;
  function handleChange(inputIdentifier, newInputValue) {
    setUserInputValue((prevUserInputValue) => {
      return {
        ...prevUserInputValue,
        [inputIdentifier]: +newInputValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInputValue={userInputValue} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter a value greater than Zero.</p>}
      {inputIsValid && <Result input={userInputValue} />}
    </>
  );
}

export default App;
