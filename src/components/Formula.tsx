import { ReactElement, useEffect } from 'react';
import { useMathJax } from '../hooks';

export default function MathJaxFormula({ formula }: MathJaxFormulaProps): ReactElement {
  const [MathJax, updateMathContent] = useMathJax();

  useEffect(() => {
    updateMathContent();
  });

  if (!MathJax) return <></>;

  return <div>{formula}</div>;
}

type MathJaxFormulaProps = {
  formula: string;
};
