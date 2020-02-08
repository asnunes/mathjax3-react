import load from 'load-script';
import React, { createContext, useContext, useState, useEffect } from "react";

const MathJaxContext = createContext(null);

const Provider = props => {
  const options = { props };
  const [MathJax, setMathJax] = useState(null);

  useEffect(
    () => {
      load("https://cdn.jsdelivr.net/npm/mathjax@3/es5/mml-svg.js", (err, script) => {
        if (err) return onErr(err);
        return onLoad(script);
      })
    }, []);

  function onLoad(script) {
    console.log(script);
    setMathJax(window.MathJax);
  }

  function onErr(err) {
    console.log(err);
  }

  return <MathJaxContext.Provider value={MathJax} {...props} />;
}

export const useMathJaxContext = () => useContext(MathJaxContext);

export default Provider;
