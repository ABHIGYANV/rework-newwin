// ReactComponent
import React from 'react';
import { openCodingTestWindow } from './codingTestWindow';

const YourReactComponent = () => {
  // call openCodingTestWindow appropriate
  const handleButtonClick = () => {
    openCodingTestWindow();
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Open Coding Test</button>
    </div>
  );
};

export default YourReactComponent;