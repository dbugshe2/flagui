import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Toggle.module.scss";
import _ from "lodash";
import Switch from "components/Primary/Switch";
import Icon from "components/Primary/Icon";
import DropDown from "components/Primary/DropDown";
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
    useNumericValue,
    limit,
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
      <div className={styles.toggleControls}>
        {useNumericValue && !disabled ? (
          <DropDown
            value={additionalValue}
            onChange={onAdditionalValueChange}
            disabled={disabled}
            limit={limit}
          />
        ) : undefined}
        <Switch
          disabled={disabled}
          name={name}
          value={toggleValue}
          onChange={_handleToggle}
        />
      </div>
    </div>
  );
};

export const TogglePropTypes = {
  onValue: PropTypes.string,
  offValue: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  useNumericValue: PropTypes.bool,
  limit: PropTypes.number,
  additionalValue: PropTypes.any,
  onAdditionalValueChange: PropTypes.func,
};

Toggle.propTypes = TogglePropTypes;

Toggle.defaultProps = {
  onValue: "on",
  offValue: "off",
  disabled: false,
  label: "untitled",
  name: "untitled",
  onChange: () => {},
};

export default Toggle;
