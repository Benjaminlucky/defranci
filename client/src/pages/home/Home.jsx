import React from "react";
import Hero from "../../components/Hero";
import HomeIntro from "../../components/HomeIntro";
import Homeservices from "../../components/Homeservices";
import Homeprojects from "../../components/Homeprojects";

function Home() {
  return (
    <div className="homeContainer">
      <div className="heroSection">
        <Hero />
      </div>
      <div className="homeIntro">
        <HomeIntro />
      </div>
      <div className="homeServices">
        <Homeservices />
      </div>
      <div className="homeProjects">
        <Homeprojects />
      </div>
    </div>
  );
}

export default Home;
