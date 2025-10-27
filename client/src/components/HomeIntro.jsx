import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function HomeIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  if (isInView) controls.start("visible");

  const cardVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden w-full bg-black py-24"
    >
      {/* Infinite light sweep overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6a8f05]/30 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Slight dark overlay for depth */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]" />

      {/* Content container (centered and padded) */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-12">
        {/* Left Side */}
        <motion.div
          className="left md:w-1/2"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <div className="leftContent">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Integrity, Excellence, and Innovation
            </h3>
            <p className="text-gray-300 leading-relaxed text-justify text-lg">
              Since 2008,{" "}
              <span className="font-semibold text-[#6a8f05]">
                DaFranci Homes Limited
              </span>{" "}
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
        </motion.div>

        {/* Right Side */}
        <div className="right md:w-1/2">
          <div className="rightContent grid gap-6">
            {[
              {
                title: "Our Mission",
                text: "To provide exceptional real estate development services by combining integrity, quality, value, and innovation — creating spaces where people love to live, work, and thrive.",
              },
              {
                title: "Our Vision",
                text: "To redefine modern living through innovative designs, sustainable practices, and unmatched craftsmanship — setting the benchmark for real estate excellence in Africa.",
              },
              {
                title: "Our Values",
                text: "Integrity, professionalism, customer satisfaction, innovation, and teamwork — these are the pillars that guide every DaFranci project from concept to completion.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={controls}
                whileHover={{
                  boxShadow: "0 0 30px rgba(106, 143, 5, 0.4)",
                  scale: 1.02,
                }}
                className="relative bg-[#111] hover:bg-[#1a1a1a] transition-all duration-500 rounded-xl p-6 shadow-md border border-[#222]"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#6a8f05]">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeIntro;
