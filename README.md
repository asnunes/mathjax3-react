# MathJax3 - React

React component to easily load MathJax **v3** and process **dynamically** raw ASCIIMath, TeX or MathML content.

[**LIVE EXAMPLE**](https://asnunes.github.io/mathjax3-react/)

## Installation

NPM:

`npm install mathjax3-react --save`

YARN:

`yarn add mathjax3-react`

## Basic usage

#### From HTML String

```javascript
import React from 'react';
import MathJax from 'mathjax3-react';

function App() {
  return (
    <div>
      <MathJaxProvider>
        <MathJaxHtml html={html} />
      </MathJaxProvider>
    </div>
  );
}
```

HTML string:

```javascript
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
```

Result:

![basic html example](./docs/images/html-basic.png)

### TeX or AsciiMath formula

```javascript
import React from 'react';
import MathJax from 'mathjax3-react';

function basicUsage() {
  return (
    <div className="App">
      <MathJax.Provider>
        <MathJax.Formula formula="$$\int x^2dx$$" />
      </MathJax.Provider>
    </div>
  );
}

export default basicUsage;
```

Result:

![basic formula example](./docs/images/formula-basic.png)

### Custom options

You can set custom script url or MathJax by sending them as props to `MathJax.Provider` component

```javascript
import React from 'react';
import MathJax from 'mathjax3-react';

function customOptions() {
  return (
    <div className="App">
      <MathJax.Provider
        url="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
        options={{
          tex: {
            inlineMath: [
              ['$', '$'],
              ['\\(', '\\)'],
            ],
          },
        }}
      >
        <MathJax.Formula formula="Euler's identity: $e^{i\pi} = -1$" />
      </MathJax.Provider>
    </div>
  );
}

export default customOptions;
```

Result:

![custom formula example](./docs/images/formula-custom.png)

**Which options are available?**

Options props are exactly the same options used in MathJax lib. So you can use [official MathJax documentation](https://docs.mathjax.org/en/latest/web/configuration.html) to set custom options.

### Custom Input

```javascript
import React, { useState } from 'react';
import MathJax from 'mathjax3-react';

function CustomInput() {
  const [value, setValue] = useState('\\int_{-\\infty}^{+\\infty} e^{-x^2} dx = \\sqrt{\\pi}');

  return (
    <div className="App">
      <h1>Custom Math Input</h1>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} style={{ width: '100%' }} />
      <MathJax.Provider>
        <MathJax.Formula formula={'$$' + value + '$$'} />
      </MathJax.Provider>
    </div>
  );
}

export default CustomInput;
```

Result is available on [**live example**](https://asnunes.github.io/mathjax3-react/).

## MathJax.Provider

`MathJax.Provider` needs to be parent of `MathJax.Html` or `MathJax.Formula` components. That's because `MathJax.Provider` is responsible to load MathJax script which will be consumed and updated by `MathJax.Html` or `MathJax.Formula`.

**Why did you do it?**

It's because load MathJax can be heavy. So, you can can place `MathJax.Provider` in a higher context and then place `MathJax.Html` and `MathJax.Formula` in a context that will be updated more often.
