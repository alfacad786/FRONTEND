import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Router } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    
    </React.StrictMode>
  </BrowserRouter>
);
// ReactDOM.createRoot(document.getElementById("root")).render(
//   // <BrowserRouter>
//   <React.StrictMode>
//   <Router>
//     <Route exact path="/" component={App} />
//     <Route exact path="/mobile" component={Mobile} />
//   </Router>
// </React.StrictMode>

// );
