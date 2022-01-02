import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = (props) => {
  const { children } = props;
  return <button>{children}</button>;
};

Button.propTypes = {};

export default Button;
