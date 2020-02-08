import React from "react";
import MathJax from "../../lib";

function customOptions() {
  return (
    <div className="App">
      <MathJax.Provider
        url="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
        options={{
          tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']]
          }
        }}
      >
        <MathJax.Formula formula="test: $x + 2$"/>
      </MathJax.Provider>
    </div>
  );
}

export default customOptions;
