import "./Top.css";

import React from "react";
import { Link } from "react-router-dom";

function Top() {
  return (
    <div className="Top">
      <div className="B1">
        <Link to="/mobile">Mobile</Link> {/* Link to the About page */}
      </div>
    </div>
  );
}
export default Top;
