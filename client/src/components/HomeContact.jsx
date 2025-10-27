import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

function HomeContact() {
  return (
    <section className="relative w-full bg-black py-36 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Continuous Light Sweep Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6a8f05]/20 to-transparent animate-sweep" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center justify-center gap-8 max-w-xl"
      >
        <motion.h2
          className="text-white text-2xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Ready to Build Your Dream Project?
        </motion.h2>

        <motion.p
          className="text-gray-300 text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Let’s bring your vision to life — with quality, integrity, and a team
          you can trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button
            variant="primary"
            size="md"
            className="!bg-[#6a8f05] hover:!bg-[#88b408] !text-black font-semibold !border-none px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contact Us Today
          </Button>
        </motion.div>
      </motion.div>

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
          animation: sweep 8s linear infinite;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(106, 143, 5, 0.2),
            transparent
          );
          mix-blend-mode: overlay;
        }
      `}</style>
    </section>
  );
}

export default HomeContact;
