import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Switch.module.scss";
import _ from "lodash";

const Switch = (props) => {
  const { disabled, name, value, onChange } = props;

  const [checked, setChecked] = useState();

  const handleSwitch = () => {
    if (_.isFunction(onChange)) onChange(!checked);
    setChecked((checkedState) => !checkedState);
  };

  return (
    <label
      className={
        disabled ? styles.switchContainerDisabled : styles.switchContainer
      }
      onClick={disabled ? null : handleSwitch}
    >
      <input type="hidden" name={name} value={value} />
      <span
        className={`${styles.switchTrack} ${
          checked ? styles.switchTrackChecked : ""
        }`}
      ></span>
      <span
        className={`${styles.switchButton} ${
          checked ? styles.switchButtonChecked : ""
        }`}
      ></span>
    </label>
  );
};

Switch.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Switch.defaultProps = {
  disabled: false,
  onChange: () => {},
  value: "on",
};

export default Switch;
