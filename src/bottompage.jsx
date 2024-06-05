import "./Page.css";
// import "./CardList.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import MOBI from "./components/Mobi";
import Newpage from "./components/newPage";
function BottomPage() {
  return (
    
    <div className="Page">
      
      <Routes>
       
        <Route path="/" element={<MOBI />} />
        <Route path="/newpage" element={<Newpage />} />
      </Routes>
    </div>
    
  );
}
export default BottomPage;
