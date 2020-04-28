import { useEffect } from "react";
import { useMathJaxContext } from "../providers/Provider";

export const useMathJax = () => {
  const MathJax = useMathJaxContext();

  useEffect(() => {
    updateMathContent();
  });

  function updateMathContent() {
    MathJax && MathJax.typeset();
  }

  return [MathJax, updateMathContent];
};
