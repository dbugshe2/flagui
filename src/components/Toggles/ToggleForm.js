import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Toggle from "./Toggle";
import _ from "lodash";
import ToggleGroup from "./ToggleGroup";
import Title from "components/Primary/Title";
import Panel from "components/Container/Panel";
import schemas from "data/dummyFormSchemas";
import acorn from "acorn";

const ToggleForm = (props) => {
  const { schema = {}, initialValues, onChange } = props;

  const [formName, setFormName] = useState(schema?.formName || "");
  const [fields, setFields] = useState(schema?.fields || []);
  const [values, setValues] = useState(initialValues);

  const _handleTogglesValueChange = (valObj) => {
    setValues((oldValuesState) => {
      return { ...oldValuesState, ...valObj };
    });
  };

  //   immediately submitForm onChange
  useEffect(() => {
    if (_.isFunction(onChange)) onChange(values);
  }, [values]);

  //   dynamically update schema
  useEffect(() => {
    if (!_.isEmpty(schema) && _.isArray(schema)) setFields(schema?.fields);
  }, [schema]);

  return (
    <>
      {formName && <Title text={formName} />}
      <Panel>
        {fields.length > 0 &&
          fields.map((fieldObj, fieldIndex) => {
            if (fieldObj?.subFields) {
              return (
                <ToggleGroup
                  onChange={_handleTogglesValueChange}
                  key={fieldIndex.toString()}
                  name={fieldObj?.name}
                  label={fieldObj?.label}
                  schema={fieldObj}
                  initialValues={initialValues[fieldObj.name]}
                />
              );
            }
            return (
              <Toggle
                key={`Toggle-${fieldIndex.toString()}`}
                onValue={fieldObj?.onValue || undefined}
                offValue={fieldObj?.offValue || undefined}
                disabled={fieldObj?.disabled || false}
                useNumericValue={fieldObj?.useNumericValue || false}
                limit={fieldObj?.limit}
                label={fieldObj?.label}
                name={fieldObj?.name}
                onChange={_handleTogglesValueChange}
              />
            );
          })}
      </Panel>
    </>
  );
};

ToggleForm.propTypes = {};

export default ToggleForm;
