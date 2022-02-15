import React, { useEffect } from "react";
import { useMathJax } from "../hooks";

export default function Html({ html, onFinishRender }) {
  const [MathJax, updateMathContent] = useMathJax();

  useEffect(() => {
    if (MathJax) updateMathContent(onFinishRender);
  }, [MathJax, updateMathContent, onFinishRender]);

  if (!MathJax) return null;

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
