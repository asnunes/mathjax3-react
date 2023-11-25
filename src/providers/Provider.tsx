import loadScript from 'simple-load-script';
import { createContext, useState, useEffect } from 'react';
import { MathJaxOptions } from '../protocols';

export type MathJaxContextType = MathJaxOptions;

export const MathJaxContext = createContext<MathJaxContextType>({});

export const MathJaxProvider = (props: MathJaxProviderProps) => {
  const url = props.url || DEFAULT_URL;
  const options = props.options || DEFAULT_OPTIONS;

  const [MathJax, setMathJax] = useState<MathJaxOptions>(options);

  // @ts-expect-error - MathJax is not defined
  window.MathJax = MathJax;

  useEffect(() => {
    loadScript(url).then(onLoad).catch(onErr);
  }, [url]);

  function onLoad() {
    setMathJax(window.MathJax);
  }

  function onErr(err: Error) {
    console.log(err);
  }

  return <MathJaxContext.Provider value={MathJax} {...props} />;
};

type MathJaxProviderProps = {
  url?: string;
  options?: MathJaxOptions;
  children: React.ReactNode;
};

const DEFAULT_OPTIONS: MathJaxOptions = {};
const DEFAULT_URL = 'https://cdn.jsdelivr.net/npm/mathjax@3.0.1/es5/tex-mml-chtml.js';
