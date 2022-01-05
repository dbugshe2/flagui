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
    name,
    onChange,
    value,
    useNumericValue,
    limit,
  } = props;

  const [toggleValue, setToggleValue] = useState(value);

  const [numericValue, setNumericValue] = useState(-1);

  const toggleOn = () => {
    setToggleValue(onValue);
  };
  const toggleOff = () => {
    setToggleValue(offValue);
    setNumericValue(undefined);
  };

  const _handleToggle = (toggledChecked) => {
    if (!useNumericValue) {
      if (!toggledChecked) {
        if (onChange) onChange({ [`${name}`]: `${offValue}` });
        toggleOff();
        return;
      }

      if (toggledChecked) {
        if (onChange) onChange({ [`${name}`]: `${onValue}` });
        toggleOn();
        return;
      }
    }

    if (useNumericValue) {
      if (!toggledChecked) {
        if (onChange) onChange({ [`${name}`]: `${offValue}` });
        toggleOff();
        return;
      }

      if (toggledChecked) {
        // if (onChange) onChange({ [`${name}`]: `${onValue}` });
        toggleOn();
      }
    }
  };

  const _handleSetNumericValue = (val) => {
    // update handler value with numeric value
    setNumericValue(val);
    if (_.isFunction(onChange)) onChange({ [`${name}`]: val });
    // return;
  };

  useEffect(() => {
    if (value === onValue) {
      toggleOn();
      return;
    }

    if (value === offValue) {
      toggleOff();
      return;
    }

    if (useNumericValue && value > -1) {
      setNumericValue(value);
      toggleOn();
      return;
    }
    toggleOff();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, numericValue]);

  return (
    <div className={styles.toggleWrapper}>
      <Icon />
      <span className={styles.toggleLabel}>{label}</span>
      <div className={styles.toggleControls}>
        {useNumericValue && toggleValue === onValue ? (
          <DropDown
            value={numericValue}
            onChange={_handleSetNumericValue}
            limit={limit}
          />
        ) : undefined}
        <Switch
          checked={toggleValue === onValue || numericValue > -1}
          onChange={_handleToggle}
        />
      </div>
    </div>
  );
};

export const TogglePropTypes = {
  onValue: PropTypes.string,
  offValue: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  useNumericValue: PropTypes.bool,
  limit: PropTypes.number,
};

Toggle.propTypes = TogglePropTypes;

export default Toggle;
