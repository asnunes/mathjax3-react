import loadScript from "simple-load-script";
import React, { createContext, useContext, useState, useEffect } from "react";

const MathJaxContext = createContext(null);

const Provider = (props) => {
  const url = props.url || DEFAULT_URL;
  const options = props.options || DEFAULT_OPTIONS;

  const [MathJax, setMathJax] = useState(options);
  const [isMathJaxLoaded, setIsMathJaxLoaded] = useState(false);

  window.MathJax = MathJax;

  useEffect(() => {
    loadScript(url).then(onLoad).catch(onErr);
  }, [url]);

  function onLoad() {
    setMathJax(window.MathJax);
    setIsMathJaxLoaded(true);
  }

  function onErr(err) {
    console.log(err);
  }

  return (
    <MathJaxContext.Provider
      value={isMathJaxLoaded ? MathJax : null}
      {...props}
    />
  );
};

const DEFAULT_OPTIONS = {};
const DEFAULT_URL =
  "https://cdn.jsdelivr.net/npm/mathjax@3.0.1/es5/tex-mml-chtml.js";

export const useMathJaxContext = () => useContext(MathJaxContext);

export default Provider;
