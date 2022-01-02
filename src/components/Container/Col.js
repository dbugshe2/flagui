import React from "react";
import PropTypes from "prop-types";

const Col = (props) => {
  const { children } = props;
  return <div className="col">{children}</div>;
};

Col.propTypes = {};

export default Col;
