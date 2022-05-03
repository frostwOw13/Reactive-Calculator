import React from 'react';

import './Screen.css';

interface Props {
  expression: string | number,
  addExpression: string
}

const Screen: React.FC<Props> = ({ expression, addExpression }): JSX.Element =>
  <div className="screen">
    <span className="screen-add">{addExpression}</span>
    {expression}
  </div>

export default Screen;