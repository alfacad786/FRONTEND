import "./css/Home.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "./Top.jsx";
import Nabar from "./Navbar.jsx";
import HomeBody from "./HomeBody.jsx";
import Bottom from "./bottom.jsx";
import TitlebarBelowImageList from "./image/imageList.jsx";
import CardList from "./oldCardlist.jsx";

function Home() {
  const navigate = useNavigate();
  function goTophoto() {
    navigate("/Photo");
  }
  return (
    <>
      <ResponsiveAppBar />
      <Nabar />
      <CardList/>
      <HomeBody />
      <div id="Home">
        <h4>Welcome to ALFA CONSULTONT</h4>
        <h5>
          Civil Engineer | Architectural Planner | Site Supervision | Full Stack
          Web Developer
        </h5>
        ________________________________________
        <p>About Me</p>
        <p>
          Welcome to my professional portfolio. I am Asifiqbal Shaikh, a
          seasoned Civil Engineer, Architectural Planner, and Full Stack Web
          Developer. With over two decades of experience in civil engineering
          and architectural planning, combined with my recent expertise in
          modern web development, I bring a unique blend of technical skills and
          creative problem-solving to every project I undertake.
        </p>
        <h6>My Expertise</h6>
        <p>
          • Civil Engineering: Expertise in lineout, site visits, checking,
          estimates, and billing. Proficient in AutoCAD and 3DS MAX for precise
          planning and 3D work.
        </p>
        <p>
          • Architectural Planning: Specializing in presentation drawings,
          section & electric drawings, and 3D elevation with VRAY rendering.
        </p>
        <p>
          • Site Supervision: Providing on-site visits for detailed checking and
          lineout services, ensuring precision and quality in construction
          projects.
        </p>
        <p>
          • Web Development: Skilled in HTML5, CSS, JavaScript, Node.js,
          React.js, and more to create responsive and user-friendly web
          applications.
        </p>
        <h6>Why Choose Me?</h6>
        <p>
          I am committed to delivering projects on time, within budget, and to
          the highest standards of quality. My extensive experience, attention
          to detail, and innovative approach ensure successful outcomes for
          every project.
        </p>
        <h6>Explore My Work</h6>
        <p>
          Take a look at my Web Projects and Architectural Portfolio to see the
          range of work I've completed over the years.
        </p>
        ________________________________________
        <h6>Let's Connect</h6>
        <p>
          I am always open to new opportunities and collaborations. Feel free to
          reach out to me via email at{" "}
          <a href="mailto:alfacad786@gmail.com">alfacad786@gmail.com</a> or{" "}
          <a href="mailto:alfa_cad786@yahoo.com">alfa_cad786@yahoo.com</a>.
        </p>
      </div>
      <TitlebarBelowImageList />
      <Bottom />
    </>
  );
}

export default Home;
