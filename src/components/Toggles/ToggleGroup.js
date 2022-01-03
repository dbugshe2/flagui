import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ToggleGroup.module.scss";
import Panel from "components/Container/Panel";
import Toggle, { TogglePropTypes } from "./Toggle";
import chevronUp from "assets/img/chevron-up.svg";
import chevronDown from "assets/img/chevron-down.svg";
import _ from "lodash";
import useDidMountEffect from "hooks";
import Button from "components/Primary/Button";

const ToggleGroup = (props) => {
  const { schema, label, name, onChange, initialValues } = props;

  // TODO: create design and logic for ToggleGroup
  const [groupCollapsed, setGroupCollapsed] = useState();
  const [groupToggleValues, setGroupToggleValues] = useState(initialValues);

  const _handleGroupToggle = (value) => {
    if (value[name] === "on") setGroupCollapsed(false);
    if (value[name] === "off") setGroupCollapsed(true);
  };

  const _handleTogglesValuesChange = (valObj) => {
    setGroupToggleValues((oldGroupState) => {
      return { ...oldGroupState, ...valObj };
    });
  };

  useEffect(() => {
    if (!_.isEmpty(initialValues)) {
      setGroupCollapsed(false);
    }
  }, [initialValues]);

  useEffect(() => {
    if (_.isFunction(onChange)) onChange({ [`${name}`]: groupToggleValues });
  }, [groupToggleValues]);

  return (
    <>
      <div className={styles.toggleGroupHeadContainer}>
        {/* head */}
        <Toggle
          label={label}
          name={name}
          value={groupCollapsed ? "off" : "on"}
          onChange={_handleGroupToggle}
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
      <div
        className={`${styles.toggleGroupBodyContainer} ${
          groupCollapsed
            ? styles.toggleGroupBodyContainerHidden
            : styles.toggleGroupBodyContainerVisible
        }`}
      >
        {/* body */}
        {Object.entries(schema).map((toggle, toggleIndex) => {
          let toggleName = toggle[0];
          let toggleObj = toggle[1];
          if (_.isPlainObject(toggleObj) && !_.isEmpty(toggleObj)) {
            // non-empty plain object to render as toggle
            return (
              <Toggle
                key={`${label}Toggle-${toggleIndex.toString()}`}
                onValue={toggleObj?.onValue || undefined}
                offValue={toggleObj?.offValue || undefined}
                label={toggleObj?.label || undefined}
                name={toggleObj?.name || toggleName}
                disabled={toggleObj?.disabled || false}
                useNumericValue={toggleObj?.useNumericValue || false}
                limit={toggleObj?.limit}
                value={
                  groupToggleValues[toggleName] ||
                  groupToggleValues[toggleObj?.name]
                }
                onChange={_handleTogglesValuesChange}
              />
            );
          }

          return false;
        })}
      </div>
    </>
  );
};

ToggleGroup.propTypes = {
  schema: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  initialValues: PropTypes.object,
};
ToggleGroup.defaultProps = {
  schema: {},
  onChange: () => {},
  initialValues: {},
};

export default ToggleGroup;
