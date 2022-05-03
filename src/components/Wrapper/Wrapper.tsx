import React, {useCallback, useState} from 'react';

import './Wrapper.css';
import ButtonBox from "../ButtonBox/ButtonBox";
import Screen from "../Screen/Screen";

let numbers: Array<string> = [];
let operands: Array<string> = [];

const Wrapper = (): JSX.Element => {
  const [textToShow, setTextToShow] = useState<string>('');

  function calculate(): any {
    let result = Number(numbers[0]);
    console.log(numbers);
    for (let i = 0; i < operands.length; i += 1) {
      switch (operands[i]) {
        case '%':
          result %= Number(numbers[i + 1]);
          break;
        case '/':
          result /= Number(numbers[i + 1]);
          break;
        case 'X':
          result *= Number(numbers[i + 1]);
          break;
        case '-':
          result -= Number(numbers[i + 1]);
          break;
        case '+':
          result += Number(numbers[i + 1]);
          break;
        default:
          result = 0;
      }
    }
    return result;
  }

  const handleClick = useCallback((symbol: number | string): void => {
    if (Number.isInteger(symbol) || symbol === '.') {
      setTextToShow(t => t + symbol.toString());
    } else if (!Number.isInteger(symbol)) {
      if (symbol.toString() !== '=') {
        if (textToShow) numbers.push(textToShow);
        setTextToShow('');
        if (!Number.isNaN(Number(numbers[0]))) operands.push(symbol.toString());
      } else {
        numbers.push(textToShow);
        setTextToShow(calculate().toString());
      }
    }
    if (symbol === 'C') {
      numbers = [];
      operands = [];
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