import load from "load-script";
import React, { createContext, useContext, useState, useEffect } from "react";

const MathJaxContext = createContext(null);

const Provider = props => {
  const url = props.url || DEFAULT_URL;
  const options = props.options || DEFAULT_OPTIONS;

  const [MathJax, setMathJax] = useState(options);
  const [isMathJaxLoaded, setIsMathJaxLoaded] = useState(false);

  window.MathJax = MathJax;

  useEffect(() => {
    load(url, (err, script) => {
      if (err) return onErr(err);
      return onLoad(script);
    });
  }, [url]);

  function onLoad(script) {
    console.log(script);
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
const DEFAULT_URL = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/mml-svg.js";

export const useMathJaxContext = () => useContext(MathJaxContext);

export default Provider;
