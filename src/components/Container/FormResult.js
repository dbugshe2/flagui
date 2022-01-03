import React from "react";
import PropTypes from "prop-types";
import styles from "./FormResult.module.scss";
import Row from "./Row";
import Col from "./Col";

const FormResult = (props) => {
  const { data } = props;
  return (
    <Row>
      <Col>
        <div className={styles.formResultContainer}>
          <h2>form results go here</h2>
          <pre className={styles.formResultContent}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </Col>
    </Row>
  );
};

FormResult.propTypes = {};

export default FormResult;
