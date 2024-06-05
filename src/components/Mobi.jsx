
import React from "react";




import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "../button";
import Newpage from "./newPage";

function MOBI() {
 

  return (
      <div>
        
          <Routes>
            <Route path="/" element={<Button />} />
            <Route path="/newpage" element={<Newpage />} />
          </Routes>
      
      </div>
  );
}

export default MOBI;


