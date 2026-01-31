import styles from "./App.module.css";
import Display from "./components/display";
import ButtonsContainer from "./components/buttonsContainer";
import Container from "./components/Container";
import { useState } from "react";
function App() {
  const [displayValue, setDisplayValue] = useState("");
  const handleButtonClick = (buttonValue) => {
    if (buttonValue === "C"){
      setDisplayValue("");
    }
    else if (buttonValue === "="){
      try {
        setDisplayValue(eval(displayValue))
      }
      catch(error){
        setDisplayValue("Error");
      }
    } else {
      setDisplayValue(displayValue + buttonValue);
    }
  }
  
  return (
    <>
      <center>
        <Container>
          <div className={styles.calculator}>
            <h1>Calculator</h1>
            <Display displayValue={displayValue}/>
            <ButtonsContainer onButtonClick={handleButtonClick}/>
          </div>
        </Container>
      </center>
    </>
  );
}
export default App;
