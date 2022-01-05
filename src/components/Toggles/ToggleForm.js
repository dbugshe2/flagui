import React, { useEffect, useState } from "react";
import Panel from "components/Container/Panel";
import Title from "components/Primary/Title";
import _ from "lodash";
import Toggle from "./Toggle";
import ToggleGroup from "./ToggleGroup";

const ToggleForm = (props) => {
  const { schema = {}, initialValues, onChange } = props;

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

  // dynamically update fields based on schema prop
  useEffect(() => {
    if (schema?.fields) setFields(schema?.fields);
  }, [schema]);

  return (
    <>
      {schema?.formName && <Title text={schema?.formName} />}
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
                onValue={fieldObj?.onValue || "on"}
                offValue={fieldObj?.offValue || "off"}
                useNumericValue={fieldObj?.useNumericValue}
                value={initialValues[fieldObj?.name]}
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
