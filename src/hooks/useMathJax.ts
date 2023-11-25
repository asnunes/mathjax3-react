import { MathJaxOptions } from '../protocols';
import { useMathJaxContext } from '../providers/hook';

export const useMathJax = (): UseMathJaxReturn => {
  const MathJax = useMathJaxContext();

  function updateMathContent(onFinish: onFinished = () => {}) {
    if (!MathJax || typeof MathJax.typesetPromise !== 'function') return;

    MathJax.typesetPromise()
      .then(onFinish)
      .catch((e: Error) => {
        if (!isTypeError(e)) console.log(e);
      });
  }

  function isTypeError(e: Error) {
    return e instanceof TypeError; // MathJax unhandled type error bug
  }

  return [MathJax, updateMathContent];
};

type onFinished = () => void;
type UpdateMathContentFn = (onFinish?: onFinished) => void;

export type UseMathJaxReturn = [MathJaxOptions, UpdateMathContentFn];
