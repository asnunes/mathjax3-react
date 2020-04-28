import React, { useEffect } from "react";
import { useMathJax } from "../hooks";

export default function Html({ html }) {
  const [MathJax, updateMathContent] = useMathJax();

  useEffect(() => {
    updateMathContent();
  });

  if (!MathJax) return null;

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
