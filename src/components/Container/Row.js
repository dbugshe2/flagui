import React from "react";
import PropTypes from "prop-types";

const Row = (props) => {
  const { children } = props;
  return <div className="row">{children}</div>;
};

Row.propTypes = {};

export default Row;
