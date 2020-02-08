import React from "react";
import MathJax from "../../lib";

function basicUsage() {
  return (
    <div className="App">
      <MathJax.Provider>
        <MathJax.Formula formula="$$x + 2$$" />
      </MathJax.Provider>
    </div>
  );
}

export default basicUsage;
