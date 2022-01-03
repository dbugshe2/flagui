import React, { useRef } from "react";

export const useToggleForm = () => {};

export const useToggleGroup = () => {};

export const useToggle = () => {};

/**
 * Identical to React.useEffect, except that it never runs on mount. This is
 * the equivalent of the componentDidUpdate lifecycle function.
 *
 * @param {Function} func - A useEffect effect.
 * @param {Array} [deps] - useEffect dependency list.
 */

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  React.useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  // Reset on unmount for the next mount.
  React.useEffect(() => {
    return () => (didMount.current = false);
  }, []);
};

export default useDidMountEffect;
