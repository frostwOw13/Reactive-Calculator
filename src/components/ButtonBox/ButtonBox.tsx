import React from 'react';

import Button from "../Button/Button";
import './ButtonBox.css';

interface Props {
  handleClick: (symbol: number | string) => void
}

const ButtonBox: React.FC<Props> = ({ handleClick }): JSX.Element => {
  const buttonSymbols = [
    ["C", "CE", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ]

  return (
    <div className="button-box">
      {buttonSymbols.map((row) => (
        row.map((smbl: string | number) => <Button handleClick={handleClick} key={smbl} symbol={smbl}/>)
      ))}
    </div>
  );
};

export default ButtonBox;