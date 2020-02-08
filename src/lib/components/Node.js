import React, { useEffect } from "react";
import { useMathJaxContext } from '../providers/Provider';

export default function Formula({ formula }) {
  const MathJax = useMathJaxContext();

  useEffect(() => {
    MathJax && MathJax.typeset();
  }, [MathJax]);

  if (!MathJax) return null;

  return (
    <div formula={formula} ></div>
  );
}
