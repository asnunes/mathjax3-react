import React from 'react';
import MathJax from '../../lib';

function CustomOptions() {
  return (
    <div className="App">
      <MathJax.Provider
        url="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
        options={{
          tex: {
            inlineMath: [['$', '$']],
          },
        }}
      >
        <MathJax.Formula formula="Euler's identity: $e^{i\pi} = -1$" />
      </MathJax.Provider>
    </div>
  );
}

export default CustomOptions;
