import React from "react";
import ReactDOM from "react-dom";
import App from "./AppCopy";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
// registerServiceWorker();

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
