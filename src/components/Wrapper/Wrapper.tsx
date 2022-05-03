import React, {useCallback, useState} from 'react';

import './Wrapper.css';
import ButtonBox from "../ButtonBox/ButtonBox";
import Screen from "../Screen/Screen";

let firstNumber = '';
let secondNumber = '';
let operand = '';

const Wrapper = (): JSX.Element => {
  const [textToShow, setTextToShow] = useState<string>(' ');

  function calculate(fNumber: string, sNumber: string, oper: string): number {
    switch (oper) {
      case '%':
        return Number(fNumber) % Number(sNumber);
      case '/':
        return Number(fNumber) / Number(sNumber);
      case 'X':
        return Number(fNumber) * Number(sNumber);
      case '-':
        return Number(fNumber) - Number(sNumber);
      case '+':
        return Number(fNumber) + Number(sNumber);
      default:
        return 0;
    }
  }

  const handleClick = useCallback((symbol: number | string): any => {
    if (Number.isInteger(symbol) || symbol === '.') {
      setTextToShow(t => t + symbol.toString());
    } else if (!Number.isInteger(symbol)) {
      if (symbol.toString() !== '=') {
        firstNumber += textToShow;
        setTextToShow('');
        operand = symbol.toString();
      } else {
        secondNumber += textToShow;
        setTextToShow(calculate(firstNumber, secondNumber, operand).toString());
      }
    }

  }, [textToShow]);

  return (
    <div className="wrapper">
      <Screen expression={textToShow}/>
      <ButtonBox handleClick={handleClick}/>
    </div>
  )
}

export default Wrapper;