import React from 'react';

import './Button.css';

interface Props {
  handleClick: (symbol: number | string) => void,
  symbol: number | string
}

const Button: React.FC<Props> = ({ handleClick, symbol }): JSX.Element =>
  <button
    className="button"
    onClick={() => handleClick(symbol)}
    type="button">
      {symbol}
  </button>

export default Button;