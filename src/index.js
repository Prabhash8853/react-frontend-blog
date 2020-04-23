import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./NewHomepage/redux/store/store";
import App from "./App";
import "./index.css";

import register from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
register();
