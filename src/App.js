import React, { useState } from 'react';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import Button from './components/Button';
import ButtonBox from './components/ButtonBox';


const btnValues = [
      ["C", "+", "-", "%", "/"],
      [7, 8, 9, "X"],
      [4, 5, 6, "-"],
      [1, 2, 3, "+"],
      [0, ".", "="],
];

const App = () => {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });
  return (
    <Wrapper>
      <Screen value = {calc.num ? calc.num : calc.res} />
      <ButtonBox>
      {btnValues.flat().map((btn, i) => {
        return (<Button key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClickBtn={() => {
                  console.log(`${btn} clicked!`);
                }} />
        )
      })}
       
      </ButtonBox>
    
    </Wrapper>
  );
}

export default App;
