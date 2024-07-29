import "./App.css";
import "./Center.css";
import Top from "./Top.jsx";
import Nabar from "./Navbar.jsx";
import Page from "./page.jsx";
import CardList from "./CardList.jsx";
import React from "react";
import Bottom from "./bottom.jsx";

function App() {
  return (
    <>
      <div className="main">
        <Top/>
        <Nabar />
        <CardList />
        <div className="Center">
          <Page />
        </div>
        <Bottom />
      </div>
    </>
  );
}

export default App;
