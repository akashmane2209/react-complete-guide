import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppHooks from "./AppHooks";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <div>
    <App />
    {/* <AppHooks /> */}
  </div>,
  document.getElementById("root")
);
registerServiceWorker();
