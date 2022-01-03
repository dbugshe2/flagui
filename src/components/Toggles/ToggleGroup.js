import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ToggleGroup.module.scss";
import Panel from "components/Container/Panel";
import Toggle, { TogglePropTypes } from "./Toggle";
import chevronUp from "assets/img/chevron-up.svg";
import chevronDown from "assets/img/chevron-down.svg";

const ToggleGroup = (props) => {
  const { toggles, label, name, onChange, values } = props;

  // TODO: create design and logic for ToggleGroup
  const [groupCollapsed, setGroupCollapsed] = useState(true);
  const [groupToggleValue, setGroupToggleValue] = useState();

  const _handleToggle = () => {
    setGroupToggleValue((toggleValueState) =>
      toggleValueState === "on" ? "off" : "on"
    );
    setGroupCollapsed((collpasedState) => !collpasedState);
  };

  return (
    <>
      <div className={styles.toggleGroupHeadContainer}>
        {/* head */}
        <Toggle
          label={label}
          value={groupToggleValue}
          onChange={_handleToggle}
          onValue="on"
          offValue="off"
        />
        <span className={styles.collapseIcon}>
          {groupCollapsed ? (
            <img src={chevronDown} alt="down closed" />
          ) : (
            <img src={chevronUp} alt="up open" />
          )}
        </span>
      </div>
      {/* <hr /> */}
      <div
        className={`${styles.toggleGroupBodyContainer} ${
          groupCollapsed
            ? styles.toggleGroupBodyContainerHidden
            : styles.toggleGroupBodyContainerVisible
        }`}
      >
        {/* body */}
        <Toggle label="User" />
        <Toggle label="User Add" />
        <Toggle label="User Edit" />
        <Toggle label="User Delete" />
        <Toggle label="User Limit" useNumericValue limit={10} />
      </div>
    </>
  );
};

ToggleGroup.propTypes = {
  toggles: PropTypes.arrayOf(PropTypes.shape(TogglePropTypes)),
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  values: PropTypes.array,
};
ToggleGroup.defaultProps = {
  toggles: [],
  onChange: () => {},
};

export default ToggleGroup;
