import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Switch.module.scss";
import _ from "lodash";

const Switch = (props) => {
  const { checked, onChange } = props;

  const [_checked, _setChecked] = useState();

  const handleSwitch = () => {
    if (onChange) onChange(!_checked);
    _setChecked((checkedState) => !checkedState);
  };

  useEffect(() => {
    _setChecked(checked);
  }, [checked]);

  return (
    <span className={styles.switchContainer} onClick={handleSwitch}>
      <span
        className={`${styles.switchTrack} ${
          _checked && styles.switchTrackChecked
        }`}
      ></span>
      <span
        className={`${styles.switchButton} ${
          _checked && styles.switchButtonChecked
        }`}
      ></span>
    </span>
  );
};

Switch.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

export default Switch;
