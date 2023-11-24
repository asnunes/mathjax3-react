import React from 'react';
import MathJax from '../../lib';

function BasicUsage() {
  return (
    <div className="App">
      <MathJax.Provider>
        <MathJax.Formula formula="$$\int x^2dx = \frac{1}{3}x^3 + C$$" />
      </MathJax.Provider>
    </div>
  );
}

export default BasicUsage;
