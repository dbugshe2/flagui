import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Toggle.module.scss";
import _ from "lodash";
import Switch from "components/Primary/Switch";
import Icon from "components/Primary/Icon";
import DropDown from "components/Primary/DropDown";

const Toggle = (props) => {
  const {
    onValue = "on",
    offValue = "off",
    label,
    disabled,
    name,
    onChange,
    value,
    useNumericValue,
    limit,
  } = props;

  const [toggleValue, setToggleValue] = useState();
  const [numericValue, setNumericValue] = useState();

  const _handleToggle = (toggledChecked) => {
    if (!toggledChecked) {
      if (_.isFunction(onChange)) onChange({ [`${name}`]: `${offValue}` });
      setToggleValue(offValue);
    }
    if (toggledChecked) {
      // set Toggle only
      setToggleValue(onValue);
      // use numeric value instead
      if (useNumericValue) return;
      if (_.isFunction(onChange)) onChange({ [`${name}`]: `${onValue}` });
      return;
    }
  };

  const _handleSetNumericValue = (val) => {
    if (_.isFinite(val)) {
      // update hadnler value with numeric value
      setNumericValue(val);
      if (_.isFunction(onChange)) onChange({ [`${name}`]: val });
    }
    return;
  };

  useEffect(() => {
    if (useNumericValue) {
      setNumericValue(value);
      if (_.isFinite(value)) setToggleValue(onValue);
      return;
    }
    if (value) setToggleValue(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className={styles.toggleWrapper}>
      <Icon />
      <span className={styles.toggleLabel}>{label}</span>
      <div className={styles.toggleControls}>
        {useNumericValue && toggleValue === onValue ? (
          <DropDown
            value={numericValue}
            onChange={_handleSetNumericValue}
            disabled={disabled}
            limit={limit}
          />
        ) : undefined}
        <Switch
          disabled={disabled}
          name={name}
          checked={toggleValue === onValue}
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

export default Toggle;
