import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import Select from "react-select";
import styles from "./DropDown.module.scss";
import customSelectStyles from "./customSelectStyles";
const DropDown = (props) => {
  const { value, onChange } = props;
  return (
    // TODO: customise default select component
    <CustomSelect placeholder="addon select" />
  );
};

DropDown.propTypes = {};

export const CustomSelect = (props) => {
  const { onChange, options, loading, disabled } = props;

  const _handleChange = (selectedOption) => {
    if (_.isFunction(onChange)) {
      onChange(selectedOption.value);
    }
  };

  return (
    <Select
      {...props}
      isDisabled={disabled}
      options={options}
      isLoading={loading}
      style={customSelectStyles}
      onChange={_handleChange}
    />
  );
};

CustomSelect.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};
export default DropDown;
