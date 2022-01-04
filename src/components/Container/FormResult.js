import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./FormResult.module.scss";
import Row from "./Row";
import Col from "./Col";
import Prism from "prismjs";

const FormResult = (props) => {
  const { data, schema } = props;

  // useEffect(() => {
  //   Prism.highlightAll();
  // }, [data, schema]);

  return (
    <Row>
      <Col>
        <div className={styles.formResultContainer}>
          <h2>{schema?.formName || "Form"} Results</h2>
          <pre className={`${styles.formResultContent}`}>
            <code className="language-js language-json">
              {JSON.stringify(data, null, 2)}
            </code>
          </pre>
        </div>
      </Col>
    </Row>
  );
};

FormResult.propTypes = {};

export default FormResult;
