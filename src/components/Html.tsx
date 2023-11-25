import React, { ReactElement, useEffect } from 'react';
import { useMathJax } from '../hooks';

export default function MathJaxHtml({ html, onFinishRender }: MathJaxHtmlProps): ReactElement {
  const [MathJax, updateMathContent] = useMathJax();

  useEffect(() => {
    if (MathJax) updateMathContent(onFinishRender);
  }, [MathJax, updateMathContent, onFinishRender]);

  if (!MathJax) return <></>;

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}

type MathJaxHtmlProps = {
  html: string;
  onFinishRender: () => void;
};
