import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Toggle.module.scss";
import _ from "lodash";
import Switch from "components/Primary/Switch";
import Icon from "components/Primary/Icon";
const Toggle = (props) => {
  const {
    onValue,
    offValue,
    label,
    disabled,
    defaultValue,
    name,
    onChange,
    value,
    additionalValue,
    onAdditionalValueChange,
  } = props;

  const [toggleValue, setToggleValue] = useState(defaultValue);

  const _handleToggle = (toggleChecked) => {
    if (toggleChecked) {
      if (_.isFunction(onChange)) onChange(onValue);
      setToggleValue(onValue);
      return;
    }

    if (!toggleChecked) {
      if (_.isFunction(onChange)) onChange(offValue);
      setToggleValue(offValue);
    }
  };

  useEffect(() => {
    if (defaultValue) setToggleValue(defaultValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.toggleWrapper}>
      <Icon />
      <span className={styles.toggleLabel}>{label}</span>
      <Switch
        disabled={disabled}
        name={name}
        value={toggleValue}
        onChange={_handleToggle}
      />
    </div>
  );
};

Toggle.propTypes = {
  onValue: PropTypes.string,
  offValue: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  additionalValue: PropTypes.any,
  onAdditionalValueChange: PropTypes.func,
};

Toggle.defaultProps = {
  onValue: "on",
  offValue: "off",
  disabled: false,
  label: "untitled",
  name: "untitled",
  onChange: () => {},
  defaultValue: "on",
};

export default Toggle;
