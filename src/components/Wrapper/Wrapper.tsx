import React from 'react';

import ButtonBox from "../ButtonBox/ButtonBox";
import './Wrapper.css';

const Wrapper = (): JSX.Element => {
  const bomba = 123;

  return (
    <div className="wrapper">
      <ButtonBox />
    </div>
  );
};

export default Wrapper;