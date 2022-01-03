import React from "react";
import PropTypes from "prop-types";
import Col from "./Col";
import Row from "./Row";

const SplitPane = (props) => {
  const { rightSide, leftSide } = props;
  return (
    <Row>
      <Col className="col-md-9">{leftSide}</Col>
      <Col className="col-md-3">{rightSide}</Col>
    </Row>
  );
};

SplitPane.propTypes = {
  rightSide: PropTypes.node.isRequired,
  leftSide: PropTypes.node.isRequired,
};

export default SplitPane;
