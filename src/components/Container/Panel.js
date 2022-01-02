import React from "react";
import PropTypes from "prop-types";
import styles from "./Panel.module.scss";

const Panel = (props) => {
  const { children } = props;
  return <div className={styles.panel}>{children}</div>;
};

Panel.propTypes = {
  children: PropTypes.node,
};

export default Panel;
