import React from "react";
import MathJax from "../../lib";

function App() {
  return (
    <div className="App">
      <MathJax.Provider>
        <MathJax.Html html={html}/>
      </MathJax.Provider>
    </div>
  );
}

const html = `
<p>Let's analise this equation:</p>
<p style="text-align:center;">
  <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
    <msup>
      <mrow>
        <mi>r</mi>
      </mrow>
      <mrow>
        <mn>2</mn>
      </mrow>
    </msup>
    <mo>+</mo>
    <msup>
      <mrow>
        <mi>z</mi>
      </mrow>
      <mrow>
        <mn>2</mn>
      </mrow>
    </msup>
    <mo>=</mo>
    <mn>4</mn>
  </math>
</p>
`;

export default App;
