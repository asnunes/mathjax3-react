import React, { useEffect } from "react";
import { useMathJax } from "../hooks";

export default function Formula({ formula }) {
  const [MathJax, updateMathContent] = useMathJax();

  useEffect(() => {
    updateMathContent();
  });

  if (!MathJax) return null;

  return <div>{formula}</div>;
}
