import React from "react";
import PropTypes from "prop-types";
import styles from "./PageWrapper.module.scss";
import ErrorState from "components/Container/ErrorState";

const PageWrapper = (props) => {
  const { children } = props;
  return (
    <div className={styles.pageWrapper}>
      <ErrorState>{children}</ErrorState>
    </div>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node,
};

export default PageWrapper;
