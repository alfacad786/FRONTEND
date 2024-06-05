import "./Page.css";
// import "./CardList.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Aboute from "./components/Aboute";
import Contect from "./components/Contect";
import Product from "./components/Product";
import CardDetail from "./CardDetail";
import Weather from "./components/Weather";
import Newpage from "./components/newPage";
import Singup from "./components/Singup";
import Mobile from "./Mobile";
import Photo from "./components/Photo";
import Login from "./components/login";

function Page() {
  return (
    <div className="Page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboute" element={<Aboute />} />
        <Route path="/Contect" element={<Contect />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/CardDetail" element={<CardDetail />} />
        <Route path="/newpage" element={<Newpage />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default Page;
