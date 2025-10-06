import React from "react";
import { FaBuilding, FaHardHat, FaPaintRoller, FaTools } from "react-icons/fa";
import Button from "./Button";

function HomeServices() {
  return (
    <section className="servicesWrapper bg-gray-50 py-24 px-6 md:px-12">
      <div className="servicesContent container mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-100 mb-4">
          Our Core Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          From design to completion, DaFranci Homes delivers excellence across
          every aspect of real estate, construction, and interior development.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-24 gap-8">
          {/* Real Estate Development */}
          <div className="serviceCard bg-primary-200/70 rounded-2xl shadow-md hover:bg-primary-200/30 hover:shadow-lg transition-all duration-300 p-8 flex flex-col items-center text-center">
            <FaBuilding className="text-secondary-100 text-5xl mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Real Estate Development
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We acquire, design, and develop high-quality residential and
              commercial properties that enhance modern living and community
              growth.
            </p>
          </div>

          {/* Construction */}
          <div className="serviceCard bg-primary-200/70 rounded-2xl shadow-md hover:bg-primary-200/30 hover:shadow-lg transition-all duration-300 p-8 flex flex-col items-center text-center">
            <FaHardHat className="text-secondary-100 text-5xl mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Construction
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our team delivers end-to-end building solutions using best
              practices and innovative techniques for lasting, efficient
              structures.
            </p>
          </div>

          {/* Interior Design */}
          <div className="serviceCard bg-primary-200/70 rounded-2xl shadow-md hover:bg-primary-200/30 hover:shadow-lg transition-all duration-300 p-8 flex flex-col items-center text-center">
            <FaPaintRoller className="text-secondary-100 text-5xl mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Interior Design
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We create stylish, functional interiors with a choice of
              traditional or contemporary finishes to suit your taste and
              purpose.
            </p>
          </div>

          {/* Renovations */}
          <div className="serviceCard bg-primary-200/70 rounded-2xl shadow-md hover:bg-primary-200/30 hover:shadow-lg transition-all duration-300 p-8 flex flex-col items-center text-center">
            <FaTools className="text-secondary-100 text-5xl mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Renovations
            </h3>
            <p className="text-gray-600 leading-relaxed">
              From kitchens to offices, we transform existing spaces with
              precision upgrades, expert craftsmanship, and attention to detail.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <Button variant="primaryAccent" size="lg">
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
