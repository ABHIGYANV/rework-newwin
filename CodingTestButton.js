// CodingTestButton.js
import React from 'react';

const CodingTestButton = () => {
  const openCodingTest = () => {
    const newWindow = window.open('coding_test.html', 'Coding Test', 'width=800,height=600');
    // additional logic here if needed
  };

  return (
    <button onClick={openCodingTest}>Open Coding Test</button>
  );
};

export default CodingTestButton;