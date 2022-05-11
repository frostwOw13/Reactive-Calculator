import React, {useCallback, useState} from 'react';

import './Wrapper.css';
import ButtonBox from "../ButtonBox/ButtonBox";
import Screen from "../Screen/Screen";

let numbers: Array<string> = [];
let operands: Array<string> = [];

const Wrapper = (): JSX.Element => {
  const [textToShow, setTextToShow] = useState<string>('');
  const [upperTextToShow, setUpperTextToShow] = useState<string>('');

  function clearScreen() {
    numbers = [];
    operands = [];
  }

  function calculate(): any {
    let result = Number(numbers[0]);
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
    return parseFloat(result.toFixed(3));
  }

  const handleClick = useCallback((symbol: number | string): void => {
    if (Number.isInteger(symbol) || symbol === '.') {
      setTextToShow(prev => prev + symbol.toString());
    } else if (!Number.isInteger(symbol) && symbol.toString() !== "CE") {
      if (symbol.toString() !== '=') {
        if (textToShow) {
          numbers.push(textToShow);
          operands.push(symbol.toString());
          setUpperTextToShow(prev => `${prev + textToShow} ${symbol.toString()} `);
        }
        if (upperTextToShow.includes('=')) {
          setUpperTextToShow(`${textToShow} ${symbol.toString()} `);
        }
        setTextToShow('');
      } else {
        if (textToShow) numbers.push(textToShow);
        // Calculate only if number array contains more than 2 numbers
        if (numbers.length >= 2 && !upperTextToShow.includes('=')) {
          if (operands.length >= numbers.length) {
            // Replace last operand from upper text to equal sign
            operands.pop();
            setUpperTextToShow(prev => {
              const arr = prev.split('');
              arr.splice(-2).join('')
              return `${arr.join('')} = `;
            });
          } else {
            setUpperTextToShow(prev => `${prev + textToShow} ${symbol.toString()} `)
          }
          setTextToShow(calculate().toString());
          clearScreen();
        }
      }
    }
    if (symbol === 'C') {
      clearScreen();
      setUpperTextToShow('');
    }
    if (symbol === 'CE') {
      if (numbers.length === 0) {
        setUpperTextToShow('');
        setTextToShow('');
      }
      setTextToShow('');
    }
  }, [textToShow, upperTextToShow]);

  return (
    <div className="wrapper">
      <Screen addExpression={upperTextToShow} expression={textToShow} />
      <ButtonBox handleClick={handleClick}/>
    </div>
  )
}

export default Wrapper;