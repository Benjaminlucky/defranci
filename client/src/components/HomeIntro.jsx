import React from "react";

function HomeIntro() {
  return (
    <section className="homeIntro container mx-auto px-6 md:px-none py-24">
      <div className="introContent flex flex-col md:flex-row justify-between gap-12">
        {/* Left Side */}
        <div className="left md:w-1/2">
          <div className="leftContent">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-secondary-100">
              Integrity, Excellence, and Innovation
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify text-lg">
              Since 2008,{" "}
              <span className="font-semibold">DaFranci Homes Limited </span>
              has been building quality homes and workspaces across Nigeria. We
              specialize in real estate development, offering complete services
              — from land acquisition and design to construction, project
              management, renovations, and interior finishing. Driven by
              integrity, innovation, and a passion for excellence, our
              experienced team delivers bespoke residential, commercial, and
              institutional projects that meet international standards. Every
              project reflects our commitment to quality craftsmanship, customer
              satisfaction, and long-term value.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="right md:w-1/2">
          <div className="rightContent grid gap-6">
            {/* Mission */}
            <div className="mission bg-primary-200 hover:bg-primary-200/50 transition-all duration-300 rounded-md p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-secondary-100">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg ">
                To provide exceptional real estate development services by
                combining integrity, quality, value, and innovation — creating
                spaces where people love to live, work, and thrive.
              </p>
            </div>

            {/* Vision */}
            <div className="vision bg-primary-200/70 hover:bg-primary-200/40 transition-all duration-300 rounded-sm p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-secondary-100">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To redefine modern living through innovative designs,
                sustainable practices, and unmatched craftsmanship — setting the
                benchmark for real estate excellence in Africa.
              </p>
            </div>

            {/* Values */}
            <div className="values bg-primary-200/50 hover:bg-primary-200/30 transition-all duration-300 rounded-sm p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-secondary-100">
                Our Values
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Integrity, professionalism, customer satisfaction, innovation,
                and teamwork — these are the pillars that guide every DaFranci
                project from concept to completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeIntro;
