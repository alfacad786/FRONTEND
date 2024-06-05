import React from "react";
import { useNavigate } from "react-router-dom";

function Button() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/newpage");
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        Go to New Page
      </button>
    </>
  );
}

export default Button;
