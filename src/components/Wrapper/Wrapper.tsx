import React from 'react';

import './Wrapper.css';
import ButtonBox from "../ButtonBox/ButtonBox";
import Screen from "../Screen/Screen";

const Wrapper = (): JSX.Element =>
  <div className="wrapper">
    <Screen />
    <ButtonBox />
  </div>

export default Wrapper;