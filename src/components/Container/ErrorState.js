import React, { Component } from "react";
import Button from "components/Primary/Button";
import styles from "./ErrorState.module.scss";

export default class ErrorState extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  handleRefresh = () => {
    window.location.reload(false);
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
    console.log({ componentError: error, componentErrorDetails: errorInfo });
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { children } = this.props;
    if (hasError || error) {
      return (
        <div className={styles.errorBoundaryWrapper}>
          <p className={styles.errorBoundaryLargeText}>OOPS!</p>
          <h2>Sorry, something went wrong</h2>
          <h4>an error has occured</h4>
          <h6>Try Refreshing the page, and try again</h6>
          <div>
            <Button onClick={this.handleRefresh}>Refresh Page</Button>
          </div>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {error && error.toString()}
            <br />
            {errorInfo?.componentStack}
          </details>
        </div>
      );
    }
    return <>{children}</>;
  }
}
