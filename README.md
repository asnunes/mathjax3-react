# MathJax3 - React 

React component to  easily load MathJax **v3** and process **dynamically** raw ASCIImath and TeX formulas or HTML content.

## Installation

NPM:

``npm install mathjax3-react --save``

YARN:

``yarn add mathjax3-react``

## Basic usage

#### From HTML String

````javascript
import React from "react";
import MathJax from "mathjax3-react";

function App() {
  return (
    <div className="App">
      <MathJax.Provider>
        <MathJax.Html html={html}/>
      </MathJax.Provider>
    </div>
  );
}
````

HTML string:

````javascript
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
````

Result



### TeX or AsciiMath formula

````javascript
import React from "react";
import MathJax from "mathjax3-react";

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

````

Result

### Custom options

You can set custom script url or MathJax by sending them as props to ``MathJax.Provider`` component

````javascript
import React from "react";
import MathJax from "mathjax3-react";

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

````

**Which options are available?**

Options props are exactly the same options used in MathJax lib. So you can use [official MathJax documentation](https://docs.mathjax.org/en/latest/web/configuration.html) to set custom options.



## MathJax.Provider

``MathJax.Provider`` needs to be parent of ``MathJax.Html`` or ``MathJax.Formula`` components. That's because ``MathJax.Provider`` is responsible to load MathJax script which will be consumed and updated by ``MathJax.Html`` or ``MathJax.Formula``.

**Why did you do it?**

It's because load MathJax can be heavy. So, you can can place ``MathJax.Provider`` in an more higher context and then place ``MathJax.Html`` and ``MathJax.Formula`` in a context that will be updated more often.

