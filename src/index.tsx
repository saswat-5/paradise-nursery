import React from "react";
import ReactDOM from "react-dom/client"; // Import from react-dom/client in React 18
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
