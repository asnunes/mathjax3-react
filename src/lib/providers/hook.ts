import { useContext } from 'react';
import { MathJaxContext } from './Provider';

export const useMathJaxContext = () => useContext(MathJaxContext);
