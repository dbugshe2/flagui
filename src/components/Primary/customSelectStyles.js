const customSelectStyles = {
  clearIndicator: (provided, state) => {
    return {
      ...provided,
    };
  },
  container: (provided, state) => {
    return { ...provided, padding: 0, margin: 0 };
  },
  control: (provided, state) => {
    return { ...provided, height: 15, padding: 2 };
  },
  dropdownIndicator: (provided, state) => {
    return { ...provided, color: "#121212" };
  },
  indicatorsContainer: (provided, state) => {
    return { ...provided };
  },
  indicatorSeparator: (provided, state) => {
    return { ...provided, display: "none" };
  },
  input: (provided, state) => {
    return { ...provided, fontSize: 12 };
  },
  loadingIndicator: (provided, state) => {
    return { ...provided };
  },
  loadingMessage: (provided, state) => {
    return { ...provided };
  },
  menu: (provided, state) => {
    return { ...provided, fontSize: 12 };
  },
  menuList: (provided, state) => {
    return { ...provided };
  },
  menuPortal: (provided, state) => {
    return { ...provided };
  },
  option: (provided, state) => {
    return { ...provided, fontSize: 12, color: "#121212" };
  },
  placeholder: (provided, state) => {
    return { ...provided, fontSize: 12 };
  },
  singleValue: (provided, state) => {
    return { ...provided, fontSize: 12 };
  },
  valueContainer: (provided, state) => {
    return { ...provided };
  },
};

export default customSelectStyles;
