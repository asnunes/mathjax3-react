import React, { ReactElement, useEffect } from 'react';
import { useMathJax } from '../hooks';

export default function MathJaxFormula({ formula }): ReactElement {
  const [MathJax, updateMathContent] = useMathJax();

  useEffect(() => {
    updateMathContent();
  });

  if (!MathJax) return <></>;

  return <div>{formula}</div>;
}
