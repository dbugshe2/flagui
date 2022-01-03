import React from "react";
import PropTypes from "prop-types";

const Col = (props) => {
  const { children, className } = props;
  return <div className={`col ${className}`}>{children}</div>;
};

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Col;
