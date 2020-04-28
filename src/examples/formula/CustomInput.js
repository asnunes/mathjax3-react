import React, { useState } from "react";
import MathJax from "../../lib";

function CustomInput() {
  const [value, setValue] = useState("\\int_{-\\infty}^{+\\infty} e^{-x^2} dx = \\sqrt{\\pi}");

  return (
    <div className="App">
      <h1>Custom Math Input</h1>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} style={{width: '100%'}}/>
      <MathJax.Provider>
        <MathJax.Formula formula={"$$" + value + "$$"} />
      </MathJax.Provider>
    </div>
  );
}

export default CustomInput;
