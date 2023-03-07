import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* need to wrap App to be able to use react router dom features */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
