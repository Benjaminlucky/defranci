import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

  // Scroll-based motion
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const waveX = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
  const waveY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, staggerChildren: 0.25, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Infinite green sweep animation */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, transparent 0%, rgba(106,143,5,0.25) 50%, transparent 100%)",
          backgroundSize: "200% 200%",
          mixBlendMode: "screen",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />

      {/* Soft floating SVG wave motion */}
      <motion.svg
        className="absolute top-0 left-0 w-full h-full opacity-10"
        viewBox="0 0 1440 320"
        style={{ x: waveX, y: waveY }}
      >
        <defs>
          <linearGradient id="liquidGradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(106,143,5,0.3)" />
            <stop offset="50%" stopColor="rgba(106,143,5,0.15)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <motion.path
          fill="url(#liquidGradient)"
          d="M0,160 C480,260 960,60 1440,160 L1440,320 L0,320 Z"
          animate={{
            d: [
              "M0,160 C480,260 960,60 1440,160 L1440,320 L0,320 Z",
              "M0,140 C500,200 940,100 1440,140 L1440,320 L0,320 Z",
              "M0,180 C480,280 1000,80 1440,180 L1440,320 L0,320 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </motion.svg>

      <div ref={ref} className="relative container mx-auto text-center z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="title mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Featured Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our landmark developments built with precision,
            sustainability, and vision.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px rgba(106,143,5,0.4)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-[#0a0a0a] rounded-xl overflow-hidden border border-[#1a1a1a] hover:border-[#6a8f05] transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 text-justify">
                  {project.description}
                </p>
                <Button
                  variant="primary"
                  size="md"
                  className="!bg-[#6a8f05] hover:!bg-[#89b006] !text-white w-full transition-all duration-300"
                >
                  View Project
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16"
        >
          <Button
            variant="primary"
            size="md"
            className="!bg-[#6a8f05] hover:!bg-[#89b006] !text-white !mx-auto"
          >
            Explore All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeProjects;
