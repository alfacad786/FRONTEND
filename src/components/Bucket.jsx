import React, { useState } from "react";
import "../css/component.css";
import Add_Object from "./Add_Object.jsx";
import CreatBucket from "./createBacket.jsx";
import List_Bucket from "./List_Bucket.jsx";
import List_Object from "./List_object.jsx";
import Object from "./object.jsx";
import Top from "../Top.jsx";
import Nabar from "../Navbar.jsx";

const product = () => {
  return (
  
    <>
      {/* <Top />
      <Nabar /> */}
      <CreatBucket  />
      {/* <Add_Object /> */}
      {/* <List_Bucket /> */}
      {/* <List_Object /> */}
      {/* <Object /> */}
      <div className="Not">
      <ul>
        <u><b>Note</b>:The bucket name must--</u>
        <li>
        Be unique within a partition. A partition is a grouping of Regions. AWS currently has three partitions: aws (Standard Regions), aws-cn (China Regions), and aws-us-gov (AWS GovCloud (US) Regions).

        </li>
        <li>
        પાર્ટીશનમાં અનન્ય બનો. પાર્ટીશન એ પ્રદેશોનું જૂથ છે. AWS પાસે હાલમાં ત્રણ પાર્ટીશનો છે: aws(માનક પ્રદેશો), aws-cn(ચીન પ્રદેશો), અને aws-us-gov (AWS GovCloud (US) પ્રદેશો).

        </li> <li>Be between 3 and 63 characters long.

        </li><li>3 થી 63 અક્ષરોની વચ્ચે લાંબો હોવો.

</li> <li>Consist only of lowercase letters, numbers, dots (.), and hyphens (-). For best compatibility, we recommend that you avoid using dots (.) in bucket names, except for buckets that are used only for static website hosting.

        </li><li>ફક્ત લોઅરકેસ અક્ષરો, સંખ્યાઓ, બિંદુઓ (.), અને હાઇફન્સ (-) નો સમાવેશ થાય છે. શ્રેષ્ઠ સુસંગતતા માટે, અમે ભલામણ કરીએ છીએ કે તમે બકેટના નામોમાં બિંદુઓ (.) નો ઉપયોગ કરવાનું ટાળો, બકેટ સિવાય કે જેનો ઉપયોગ ફક્ત સ્ટેટિક વેબસાઇટ હોસ્ટિંગ માટે થાય છે.

</li> <li>Begin and end with a letter or number.
        </li>
        <li>અક્ષર અથવા નંબર સાથે શરૂ કરો અને સમાપ્ત કરો.
        </li>
      </ul>
      </div>
      </>
  );
};

export default product;
