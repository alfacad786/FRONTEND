import "../src/css/Page.css";
// import "./CardList.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./HomePage";
import Aboute from "./components/Aboute";
import Contect from "./components/Contect";
import Product from "./components/Bucket";
import CardDetail from "./CardDetail";
import Weather from "./components/Weather";
import Newpage from "./components/newPage";

import Mobile from "./Mobile";
import Photo from "./components/Photo";
import Login from "./components/login";
import Userportal from "./components/userportal";
import Add_User from "./components/Add_User";
import Add_Object from "./components/Add_Object";
import Add_Product from "./components/Add_Project";
import CreatBucket from "./components/createBacket";
import InputAdornments from "./components/MUI";
import SignIn from "./components/log";
import SignUp from "./components/sign";
import Quntitycal from "./components/Quntity";


function Page() {
  return (
    // <div className="Page">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Aboute" element={<Aboute />} />
        <Route path="/Contect" element={<Contect />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/CardDetail" element={<CardDetail />} />
        <Route path="/newpage" element={<Newpage />} />
        <Route path="/singup" element={<SignUp />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/userportal/:id" element={<Userportal />} />
        <Route path="/Add_User" element={<Add_User />} />
        <Route path="/Add_Object" element={<Add_Object />} />
        <Route path="/Add_Product" element={<Add_Product />} />
        <Route path="/CreatBucket" element={<CreatBucket />} />
        <Route path="/MUI" element={<InputAdornments />} />
        <Route path="/QUNTITY" element={<Quntitycal />} />
      </Routes>
    // </div>
  );
}
export default Page;
