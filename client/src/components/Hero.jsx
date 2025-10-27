import React, { useRef, useEffect } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Button from "./Button";

function Hero() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Parallax scroll setup
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 80]);

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  // Animation variants
  const fadeBlurUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const zoomPan = {
    hidden: { scale: 1.1, x: 0 },
    visible: {
      scale: 1,
      x: 10,
      transition: {
        duration: 5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      ref={ref}
      className="heroWrapper relative text-white bg-black h-[90vh] flex items-center overflow-hidden"
    >
      {/* ✅ Continuous Cinematic Green Sweep Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(106,143,5,0.2)] to-transparent pointer-events-none z-20"
        animate={{ x: ["-100%", "100%", "-100%"] }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* ✅ Background Layer with Parallax & Dimmed Visibility */}
      <motion.div
        style={{ y: yParallax }}
        className="absolute inset-0 overflow-hidden z-0"
      >
        {/* Background Image (dimmed to 20% visibility) */}
        <motion.img
          src="/images/heroBg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-center scale-105 brightness-[0.2]"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeInOut" }}
        />

        {/* ✅ Black Gradient Overlay (vignette effect) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
      </motion.div>

      <div className="heroContent container mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-10 relative z-30">
        {/* Left Side */}
        <motion.div
          className="heroLeft text-center md:text-left max-w-xl"
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          <motion.h1
            variants={fadeBlurUp}
            className="text-3xl sm:text-4xl md:text-5xl px-6 md:px-0 font-semibold leading-tight"
          >
            Building Bespoke{" "}
            <span className="text-primary-200">Living and Working Spaces</span>{" "}
            Since 2008
          </motion.h1>

          <motion.p variants={fadeBlurUp} className="mt-6 text-gray-300">
            Crafting quality, value, and innovation in every project.
          </motion.p>

          <motion.div variants={fadeBlurUp}>
            <Button
              variant="primary"
              size="lg"
              className="mt-12 transition-all duration-300 hover:shadow-[0_0_20px_2px_rgba(106,143,5,0.6)]"
            >
              Explore our Projects
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="heroRight flex justify-center md:justify-end w-full md:w-1/2"
          variants={zoomPan}
          initial="hidden"
          animate={controls}
        >
          <div className="heroRightContent relative w-90 h-64 sm:w-72 sm:h-72 md:w-10/12 md:h-[500px] rounded-2xl overflow-hidden mt-12 flex items-center justify-center">
            <motion.img
              src="/images/heroBg.jpg"
              alt="Hero Image"
              className="w-full h-full object-cover object-center"
              variants={zoomPan}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
