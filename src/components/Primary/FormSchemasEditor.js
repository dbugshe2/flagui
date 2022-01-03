import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DropDown, { CustomSelect } from "./DropDown";
import styles from "./FormSchemasEditor.module.scss";

const FormSchemasEditor = (props) => {
  const { schemas, onChange } = props;

  const [schemaOptions, setSchemaOptions] = useState([]);
  const [selectedSchema, setSelectedSchema] = useState();

  const handleSchemaEdit = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  useEffect(() => {
    if (schemas) {
      let _schemaOptions = Object.entries(schemas).map((item, _) => ({
        label: item[0],
        value: item[1],
      }));
      setSelectedSchema(_schemaOptions[0]);
      setSchemaOptions(_schemaOptions);
    }
  }, [schemas]);
  return (
    <div>
      <CustomSelect
        options={schemaOptions}
        placeholder="Select a schema to edit"
        onChange={(val) => setSelectedSchema(val)}
      />
      <textarea
        className={styles.formSchemasEditor}
        color="black"
        autoCapitalize="none"
        autoComplete="off"
        onChange={handleSchemaEdit}
        placeholder="Seem you've deleted this schema, no worries, just refresh the page"
        value={JSON.stringify(selectedSchema)}
      />
    </div>
  );
};

FormSchemasEditor.propTypes = {};

export default FormSchemasEditor;
