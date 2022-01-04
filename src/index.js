import React from "react";
import ReactDOM from "react-dom";
import "assets/css/reset.css";
import "assets/scss/styles.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Prism from "prismjs";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
setTimeout(() => Prism.highlightAll(), 0);
// for webVitals tracking
reportWebVitals();
