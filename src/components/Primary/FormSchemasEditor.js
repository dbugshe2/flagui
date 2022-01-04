import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DropDown, { CustomSelect } from "./DropDown";
import styles from "./FormSchemasEditor.module.scss";
import Prism from "prismjs";

const FormSchemasEditor = (props) => {
  const { schemas, onChange } = props;

  const [schemaOptions, setSchemaOptions] = useState([]);
  const [selectedSchema, setSelectedSchema] = useState({});
  const [content, setContent] = useState("");

  const handleSchemaEdit = (e) => {
    try {
      setContent(e.target.value);
      if (onChange) {
        // onChange(JSON.parse(e.target.value));
      }
    } catch (error) {}
  };

  const handleKeyDown = (evt) => {
    try {
      let value = content,
        selStartPos = evt.currentTarget.selectionStart;

      console.log(evt.currentTarget);

      // handle 4-space indent on
      if (evt.key === "Tab") {
        // evt.preventDefault();
        value =
          value.substring(0, selStartPos) +
          "    " +
          value.substring(selStartPos, value.length);
        evt.currentTarget.selectionStart = selStartPos + 3;
        evt.currentTarget.selectionEnd = selStartPos + 4;
        evt.preventDefault();

        setContent(value);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //   set schema select options
  useEffect(() => {
    if (schemas) {
      let _schemaOptions = Object.entries(schemas).map((item, _) => ({
        label: item[1]?.formName || item[0],
        value: item[0],
      }));
      //   setSelectedSchema(_schemaOptions[0]);
      setSchemaOptions(_schemaOptions);
    }
  }, []);

  useEffect(() => {
    if (selectedSchema)
      setContent(JSON.stringify(schemas[selectedSchema], null, 2));
  }, [selectedSchema]);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <label>Select Schema</label>
      <CustomSelect
        options={schemaOptions}
        placeholder="Select a schema to edit"
        onChange={(val) => setSelectedSchema(val)}
      />
      {/* <div className={styles.formSchemasContainer}> */}
      <textarea
        className={styles.formSchemasEditor}
        autoCapitalize="none"
        autoComplete="off"
        onChange={handleSchemaEdit}
        onKeyDown={handleKeyDown}
        value={content}
      />
    </div>
  );
};

FormSchemasEditor.propTypes = {};

export default FormSchemasEditor;
