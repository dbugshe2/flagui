import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Switch.module.scss";
import _ from "lodash";

const Switch = (props) => {
  const { disabled, name, value, checked, onChange } = props;

  const [_checked, _setChecked] = useState(checked);

  const handleSwitch = () => {
    if (_.isFunction(onChange)) onChange(!checked);
    _setChecked((checkedState) => !checkedState);
  };

  const handleInputChange = () => {};

  useEffect(() => {
    _setChecked(checked);
  }, [checked]);

  return (
    <label
      className={
        disabled ? styles.switchContainerDisabled : styles.switchContainer
      }
      onClick={disabled ? null : handleSwitch}
    >
      <input
        type="hidden"
        id={name}
        name={name}
        value={value || ""}
        onChange={handleInputChange}
      />
      <span
        className={`${styles.switchTrack} ${
          _checked ? styles.switchTrackChecked : ""
        }`}
      ></span>
      <span
        className={`${styles.switchButton} ${
          _checked ? styles.switchButtonChecked : ""
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

export default Switch;
