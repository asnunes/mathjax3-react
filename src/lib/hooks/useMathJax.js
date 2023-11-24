import { useMathJaxContext } from '../providers/Provider';

export const useMathJax = () => {
  const MathJax = useMathJaxContext();

  function updateMathContent(onFinish = () => {}) {
    if (!MathJax || typeof MathJax.typesetPromise !== 'function') return;

    MathJax &&
      MathJax.typesetPromise()
        .then(onFinish)
        .catch((e) => {
          if (!isTypeError(e)) console.log(e);
        });
  }

  function isTypeError(e) {
    return e instanceof TypeError; // MathJax unhandled type error bug
  }

  return [MathJax, updateMathContent];
};
