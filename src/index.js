import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Simple and main routing setting  */}
    <BrowserRouter>
      <App />
    </BrowserRouter>

    {/* Memory Route Doesnot Changes the url and does not depend on it */}

    {/* <MemoryRouter>
      <App />
    </MemoryRouter> */}

    {/* Hashed router put /#/ behind the URL */}
    {/* <HashRouter>
      <App />
    </HashRouter> */}

    {/* Static router is used when server side rendering and it is imported as follow:
    import { StaticTRouter } from "react-router-dom/server";
    <StaticTRouter>
      <App/>
    </StaticTRouter>
    */}
  </React.StrictMode>
);
reportWebVitals();

// var React= require
