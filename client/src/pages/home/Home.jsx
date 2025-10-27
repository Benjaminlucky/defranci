import React from "react";
import Hero from "../../components/Hero";
import HomeIntro from "../../components/HomeIntro";
import Homeservices from "../../components/Homeservices";
import Homeprojects from "../../components/Homeprojects";
import HomeWhyChoose from "../../components/HomeWhyChoose";
import HomeMeetTheTeam from "../../components/HomeMeetTheTeam";
import HomeContact from "../../components/HomeContact";

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
      <div className="homeChoose">
        <HomeWhyChoose />
      </div>
      <div className="homeTeam">
        <HomeMeetTheTeam />
      </div>
      <div className="homeContact">
        <HomeContact />
      </div>
    </div>
  );
}

export default Home;
