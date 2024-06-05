import "./Home.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function goTophoto() {
    navigate("/Photo");
  }
  return (
    <div className="Home" id="gradient-shape">
      <h5>home page</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui veniam
        perferendis id aspernatur porro excepturi expedita architecto. Deserunt
        mollitia alias, nisi molestias inventore veritatis explicabo, quisquam
        illo, molestiae accusantium quidem.{" "}
        <img src="./MAYURI1.jpg" alt="img" onClick={() => goTophoto()} /> .
        Adipisci dicta odio sapiente ab maxime illo obcaecati perspiciatis animi
        numquam ducimus, odit voluptas non deleniti fugiat, commodi aspernatur
        hic ex, expedita nostrum blanditiis! Iste recusandae ea eum dolores aut
        fugit nam aperiam suscipit rem, quo, neque ut hic distinctio! Voluptate
        commodi fugiat dicta, eos debitis praesentium qui consequatur odit
        magnam nostrum reprehenderit at voluptatibus expedita! Similique et
        ratione provident veniam autem voluptate sed reprehenderit aspernatur
        odio. Perferendis, consectetur omnis?
      </p>
    </div>
  );

}

export default Home;
