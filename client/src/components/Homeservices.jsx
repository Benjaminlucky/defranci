import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBuilding, FaHardHat, FaPaintRoller, FaTools } from "react-icons/fa";
import Button from "./Button";

function HomeServices() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-black text-white py-24 px-6 md:px-12"
    >
      {/* Continuous Light Sweep Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 animate-lightSweep opacity-40 blur-[3px]" />
      </div>

      <motion.div
        className="servicesContent container mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Header */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          variants={cardVariants}
        >
          Our Core Services
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-12"
          variants={cardVariants}
        >
          From design to completion, DaFranci Homes delivers excellence across
          every aspect of real estate, construction, and interior development.
        </motion.p>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-24 gap-8"
          variants={containerVariants}
        >
          {[
            {
              icon: <FaBuilding className="text-[#6a8f05] text-5xl mb-6" />,
              title: "Real Estate Development",
              desc: "We acquire, design, and develop high-quality residential and commercial properties that enhance modern living and community growth.",
            },
            {
              icon: <FaHardHat className="text-[#6a8f05] text-5xl mb-6" />,
              title: "Construction",
              desc: "Our team delivers end-to-end building solutions using best practices and innovative techniques for lasting, efficient structures.",
            },
            {
              icon: <FaPaintRoller className="text-[#6a8f05] text-5xl mb-6" />,
              title: "Interior Design",
              desc: "We create stylish, functional interiors with traditional or contemporary finishes to suit your taste and purpose.",
            },
            {
              icon: <FaTools className="text-[#6a8f05] text-5xl mb-6" />,
              title: "Renovations",
              desc: "From kitchens to offices, we transform existing spaces with precision upgrades, expert craftsmanship, and attention to detail.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#0a0a0a] rounded-2xl border border-[#1a1a1a] hover:border-[#6a8f05]/70 shadow-lg hover:shadow-[0_0_25px_#6a8f05]/40 transition-all duration-500 p-8 flex flex-col items-center text-center backdrop-blur-sm"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div className="mt-16" variants={cardVariants}>
          <Button
            variant="primaryAccent"
            size="lg"
            className="!bg-[#6a8f05] hover:!bg-[#8ebd07] !text-white !border-none transition-all duration-300"
          >
            Explore Our Services
          </Button>
        </motion.div>
      </motion.div>

      {/* Light Sweep Keyframes */}
      <style jsx>{`
        @keyframes lightSweep {
          0% {
            background: linear-gradient(
              120deg,
              transparent 0%,
              rgba(106, 143, 5, 0.35) 40%,
              transparent 100%
            );
            transform: translateX(-150%) skewX(-12deg);
          }
          50% {
            background: linear-gradient(
              120deg,
              transparent 0%,
              rgba(106, 143, 5, 0.5) 50%,
              transparent 100%
            );
            transform: translateX(150%) skewX(12deg);
          }
          100% {
            background: linear-gradient(
              120deg,
              transparent 0%,
              rgba(106, 143, 5, 0.35) 40%,
              transparent 100%
            );
            transform: translateX(-150%) skewX(-12deg);
          }
        }
        .animate-lightSweep {
          animation: lightSweep 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default HomeServices;
