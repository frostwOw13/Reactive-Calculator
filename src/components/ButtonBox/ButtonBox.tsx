import React, {useCallback} from 'react';

import Button from "../Button/Button";
import './ButtonBox.css';

const ButtonBox: React.FC = (): JSX.Element => {
  const buttonSymbols = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ]

  const handleClick = useCallback((symbol: number | string): any => console.log(symbol), []);

  return (
    <div className="button-box">
      {buttonSymbols.map((row) => (
        row.map((smbl: string | number) => <Button handleClick={handleClick} key={smbl} symbol={smbl}/>)
      ))}
    </div>
  );
};

export default ButtonBox;