import React from "react";
import PropTypes from "prop-types";
import styles from "./Title.module.scss";
const Title = (props) => {
  const { text } = props;
  return <p className={styles.title}>{text}</p>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
