import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./Redux/configureStore";
import { BrowserRouter as Router } from "react-router-dom";

import 

import App from "./App";

const rootElement = document.getElementById("root");
const store = configureStore();
ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  rootElement
);
