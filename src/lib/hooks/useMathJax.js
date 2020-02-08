import React, { useEffect } from 'react';
import { useMathJaxContext } from '../providers/Provider';

export const useMathJax = () => {
  const MathJax = useMathJaxContext();

  useEffect(() => {
    MathJax && MathJax.typeset();
  }, [MathJax]);

  return MathJax;
};