import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "./Button";

function HomeMeetTheTeam() {
  const team = [
    {
      name: "Damilola Abiodun",
      title: "Principal Architect & Founder",
      img: "/images/team1.png",
      bio: `With over 28 years of experience across three continents, Damilola is a seasoned architect and urban developer. His career spans projects from schools and hospitals to luxury residences. Having worked in both technical and financial aspects of real estate in the U.S., he brings a global standard of excellence to DaFranci’s operations in Nigeria.`,
    },
    {
      name: "Banke Awosika",
      title: "Principal Architect & Co-Founder",
      img: "/images/team2.png",
      bio: `A visionary designer and real estate developer, Banke has spent more than two decades crafting residential spaces that blend beauty with function. As CEO of BAA Partners and Deaconbox Nigeria Ltd, her influence extends beyond design into high-level development strategy, making her one of the most sought-after professionals in the field.`,
    },
    {
      name: "Kehinde Okeowo",
      title: "Senior Architect",
      img: "/images/team3.png",
      bio: `Known for his precision and passion for architectural detail, Kehinde brings close to 10 years of experience and a strong background in architectural graphics. His drive for excellence and mastery of technical drawings make him a vital part of the DaFranci design and construction team.`,
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      y: index % 2 === 0 ? 50 : -50,
      x: index === 1 ? 50 : -50,
    }),
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-24 px-6 md:px-12 bg-black text-white overflow-hidden">
      {/* Continuous Light Sweep */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6a8f05]/20 to-transparent animate-sweep" />
      </div>

      {/* Section Header */}
      <div className="relative text-center mb-16 z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet the Team</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Our team blends vision, creativity, and expertise to deliver
          excellence in every project.
        </p>
      </div>

      {/* Team Grid */}
      <div
        ref={ref}
        className="relative grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto z-10"
      >
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden bg-[#111] p-6 flex flex-col shadow-lg border border-gray-800 hover:border-[#6a8f05]/50 transition-all duration-500"
            variants={cardVariants}
            custom={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="flex justify-center mb-6">
              <img
                src={member.img}
                alt={member.name}
                className="h-64 w-auto object-cover rounded-lg"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-[#6a8f05] font-medium mb-4">{member.title}</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="relative text-center mt-16 z-10">
        <Button
          variant="primaryAccent"
          size="md"
          className="bg-[#6a8f05] hover:bg-[#88b408] text-black font-semibold px-8 py-3 rounded-full transition-all duration-300"
          onClick={() => alert("Redirect to full team page")}
        >
          Meet Our Full Team
        </Button>
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

export default HomeMeetTheTeam;
