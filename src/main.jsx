import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/css/index.css";
import { BrowserRouter, Route,Routes, Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './scss/styles.scss'; // Import your custom styles
import 'bootstrap';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
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
