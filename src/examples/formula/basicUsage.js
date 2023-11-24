import React from 'react';
import MathJax from '../../lib';

function BasicUsage() {
  return (
    <div className="App">
      <MathJax.Provider>
        <MathJax.Formula formula="$$\int x^2dx$$" />
      </MathJax.Provider>
    </div>
  );
}

export default BasicUsage;
