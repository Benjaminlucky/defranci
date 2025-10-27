import React, { useEffect } from "react";
import { FiShield } from "react-icons/fi";
import { LiaCertificateSolid, LiaGlobeSolid } from "react-icons/lia";
import { MdLightbulbCircle } from "react-icons/md";
import { FaRegGem } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function HomeWhyChoose() {
  const values = [
    { label: "Integrity", icon: FiShield },
    { label: "Quality", icon: LiaCertificateSolid },
    { label: "Experience", icon: LiaGlobeSolid },
    { label: "Innovation", icon: MdLightbulbCircle },
    { label: "Value", icon: FaRegGem },
  ];

  // Framer Motion controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // Fade + Blur reveal
  const fadeUp = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  // Card Stagger
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={controls}
      className="relative w-full py-36 bg-black overflow-hidden"
    >
      {/* Continuous Light Sweep Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6a8f05]/25 to-transparent animate-sweep" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto text-center px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className="mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            variants={fadeUp}
          >
            Why Choose Us
          </motion.h2>

          <motion.p
            className="text-gray-300 max-w-2xl mx-auto leading-relaxed"
            variants={fadeUp}
          >
            Because excellence isn’t just what we do — it’s how we do it. At
            DaFranci Homes, our values guide every project from start to finish.
          </motion.p>
        </motion.div>

        {/* Animated Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-24">
          {values.map((value, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              whileHover={{
                scale: 1.07,
                boxShadow: "0px 0px 25px rgba(106,143,5,0.4)",
              }}
              className="flex flex-col items-center justify-center bg-[#0a0a0a] rounded-2xl py-12 px-4 shadow-md border border-[#1a1a1a] hover:border-[#6a8f05]/50 transition-all duration-300"
            >
              <div className="icon text-[#6a8f05] text-6xl mb-3">
                <value.icon />
              </div>
              <p className="font-semibold text-white text-xl">{value.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sweep Animation Keyframes */}
      <style jsx>{`
        @keyframes sweep {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-sweep {
          animation: sweep 10s linear infinite;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(106, 143, 5, 0.25),
            transparent
          );
          mix-blend-mode: overlay;
        }
      `}</style>
    </motion.section>
  );
}

export default HomeWhyChoose;
