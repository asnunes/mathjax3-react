import React, { ReactElement, useEffect } from 'react';
import { useMathJax } from '../hooks';

export default function Html({ html, onFinishRender }): ReactElement {
  const [MathJax, updateMathContent] = useMathJax();

  useEffect(() => {
    if (MathJax) updateMathContent(onFinishRender);
  }, [MathJax, updateMathContent, onFinishRender]);

  if (!MathJax) return <></>;

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
