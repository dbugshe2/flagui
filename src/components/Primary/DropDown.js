import React, { useEffect, useState } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import Select from "react-select";
import styles from "./DropDown.module.scss";
import customSelectStyles from "./customSelectStyles";
const DropDown = (props) => {
  const { value, onChange, limit, disabled } = props;

  const [selectedOption, setSelectedOption] = useState();
  const [options, setOptions] = useState();

  const _handleNumberSelect = (value) => {
    setSelectedOption({ label: value, value });
    if (_.isFunction(onChange)) {
      onChange(value);
    }
  };

  useEffect(() => {
    // default number options to 100
    let _limit = limit > 0 ? limit : 100;
    let _options = [];
    for (let opt = 0; opt <= _limit; opt++) {
      _options.push({ label: opt, value: opt });
    }
    setOptions(_options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (_.isFinite(value)) {
      setSelectedOption({ label: value, value: value });
    }
  }, [value]);

  return (
    // TODO: customise default select component
    <div className={styles.dropdownWrapper}>
      <CustomSelect
        onChange={_handleNumberSelect}
        disabled={disabled}
        options={options}
        value={selectedOption}
        placeholder="select number"
      />
    </div>
  );
};

DropDown.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  limit: PropTypes.number,
  disabled: PropTypes.bool,
};

export default DropDown;

export const CustomSelect = (props) => {
  const { onChange, options, loading, disabled, placeholder } = props;

  const _handleChange = (selectedOption) => {
    if (_.isFunction(onChange)) {
      onChange(selectedOption.value);
    }
  };

  return (
    <Select
      isDisabled={disabled}
      options={options}
      isLoading={loading}
      styles={customSelectStyles}
      onChange={_handleChange}
      placeholder={placeholder}
    />
  );
};

CustomSelect.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
};
