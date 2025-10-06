import React from "react";
import Button from "./Button";

function HomeProjects() {
  const featuredProjects = [
    {
      id: 1,
      title: "Emotan Gardens - Edo State",
      description:
        "A government-backed 1,451-unit estate built for serenity, community, and comfort. Spread across 71 hectares with an artificial lake, promenade, shopping complex, and more.",
      imageUrl: "/images/emotan1.png",
    },
    {
      id: 2,
      title: "Beachwood Park - Lagos State",
      description:
        "Strategically located along the Lekki-Epe Expressway, Beechwood Park is a gated community blending modern homes with easy access to Lakowe Lakes and key infrastructure.",
      imageUrl: "/images/hotel.jpg",
    },
    {
      id: 3,
      title: "Safecourt Apartments Phase II – Lekki",
      description:
        "A bold residential project featuring 3 blocks of 10-storey buildings. Currently under construction, Safecourt II is designed for modern urban living in the heart of Lekki.",
      imageUrl: "/images/safecourt.jpg",
    },
  ];

  return (
    <section className="homeProjectsWrapper bg-gray-50 py-24 px-6 md:px-12">
      <div className="projectsContent container mx-auto text-center">
        {/* Section Header */}
        <div className="title mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of our signature developments — crafted with care,
            innovation, and excellence.
          </p>
        </div>

        {/* Project Grid */}
        <div className="projectGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 gap-10">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="projectCard min-h-[300px] bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                  {project.description}
                </p>
                <Button
                  variant="primary"
                  size="md"
                  className="!bg-secondary-100 !border-none hover:!text-primary-200 w-full"
                >
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeProjects;
