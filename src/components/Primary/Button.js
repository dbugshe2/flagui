import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = (props) => {
  const { children, onClick, type } = props;
  return (
    <button
      className={styles.button}
      type={type || "button"}
      onClick={onClick ? onClick : null}
    >
      {children}
    </button>
  );
};

Button.propTypes = {};

export default Button;
