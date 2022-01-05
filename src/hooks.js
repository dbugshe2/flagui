import React, { useEffect, useRef, useState } from "react";

/** useToggleForm custom hook
 *
 * @param {object} initFormValues - initial Values of form for prefilled forms
 * @returns
 */
export const useToggleForm = (initFormValues) => {
  //   const valuesRef = useRef(initFormValues);
  const [values, _setValues] = useState(initFormValues);
  const setValues = (newValues) => {
    // valuesRef.current = values;
    _setValues(newValues);
  };

  return { values, setValues };
};

/** useFormSchema custom hook
 *
 * @param {object} initSchema - initial value of the form schema
 * @returns {object}
 */
export const useFormSchema = (initSchema) => {
  //   const schemaRef = useRef(initSchema);
  const [schema, _setSchema] = useState(initSchema);
  const setSchema = (newSchema) => {
    // schemaRef.current = newSchema;
    _setSchema(newSchema);
  };
  return { schema: schema, setSchema };
};

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
