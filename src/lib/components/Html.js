import React from "react";
import { useMathJax } from '../hooks';

export default function Html({ html }) {
  const MathJax = useMathJax();

  if (!MathJax) return null;

  return (
    <div dangerouslySetInnerHTML={{__html: html }}></div>
  );
}
