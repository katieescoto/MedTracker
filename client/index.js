import React from "react";
import ReactDOM from "react-dom";
//import { Provider } from "react-redux";
import { Router } from "react-router-dom";
//import history from "./history";
//import store from "./store";
//import App from "./app";

// establishes socket connection
//import "./socket";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
      <div>Hello World!</div>
    </Router>
  </Provider>,
  document.getElementById("app")
);
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>

  </Provider>,
  document.getElementById('medtracker')
);
