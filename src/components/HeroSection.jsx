import React, { useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import gsap from "gsap";
import profile from "../assets/profile.png";

export default function HeroSection() {
  const nameRef = useRef();

  useEffect(() => {
    if (nameRef.current) {
      gsap.to(nameRef.current, {
        backgroundPosition: "200% 0",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  // GitHub and Resume URLs
  const githubURL = "https://github.com/Soumyosish";
  const resumeURL = "/resume.pdf";

  return (
    <div
      id="2"
      className="
      relative w-full min-h-screen bg-black flex flex-col
      lg:flex-row items-center justify-center px-8 py-16 mt-12
      overflow-hidden gap-12 lg:gap-16
    "
    >
      {/* Left content and Image grouped */}
      <div className="flex flex-col md:flex-row w-full lg:w-auto items-center justify-center gap-8 min-w-0">
        {/* Left text container */}
        <motion.div
          className="flex-shrink-0 flex flex-col justify-center z-10 w-full md:w-[55%] min-w-0"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight break-words whitespace-normal w-full">
            <span
              ref={nameRef}
              style={{
                background:
                  "linear-gradient(90deg, #a78bfa, #fb7185, #fdba74, #a78bfa)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                backgroundSize: "200% 100%",
                backgroundPosition: "0% 0%",
              }}
              className="block select-none"
            >
              Soumyosish
            </span>
            <span className="block bg-gradient-to-r from-pink-500 via-blue-400 to-purple-200 text-transparent bg-clip-text">
              Pal
            </span>
          </h1>
          <p className="text-gray-200 text-lg sm:text-xl mb-10 max-w-xl drop-shadow">
            Driven by precision and efficiency with focus on mastering modern
            web technologies and programming languages, I build clean, scalable,
            and high-performance web applications that solve real-world
            problems.
          </p>
          {/* Buttons */}
          <div className="flex gap-6">
            <a
              href={githubURL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg shadow-lg hover:brightness-110 transition duration-300 font-semibold"
            >
              Contact
            </a>
            <a
              href={resumeURL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-transparent border border-violet-500 text-violet-500 rounded-lg shadow hover:bg-violet-500 hover:text-white transition duration-300 font-semibold"
            >
              Resume
            </a>
          </div>
        </motion.div>
        {/* Image container */}
        <motion.div
          className="flex-shrink-0 flex items-center justify-center z-10 w-[200px] h-[250px] sm:w-[260px] sm:h-[330px] md:w-[290px] md:h-[400px] lg:w-[290px] lg:h-[450px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
        >
          <motion.div className="relative group w-full h-full flex items-center justify-center">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-300 blur-lg opacity-30" />
            <img
              src={profile}
              alt="Profile"
              className="relative rounded-xl shadow-2xl border-transparent transition duration-300 object-cover w-full h-full"
              style={{ zIndex: 2 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Feature Cards: Always vertical below md */}
      <motion.div
        className="
          flex flex-col md:flex-row lg:flex-col gap-6 z-10 max-w-full md:max-w-2xl w-full lg:w-auto
          justify-center
          mt-10 md:mt-10 lg:mt-0
        "
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25, ease: "easeOut" }}
      >
        <GlowingCard color="from-purple-400" title="FULL-STACK DEVELOPMENT">
          Building responsive, high-performing web applications from frontend to
          backend.
        </GlowingCard>
        <GlowingCard color="from-orange-400" title="PROBLEM SOLVING">
          Breaking down complex challenges into clear, efficient, and scalable
          solutions.
        </GlowingCard>
        <GlowingCard color="from-blue-400" title="TECH ENTHUSIAST">
          Staying updated with the latest technologies to deliver modern,
          impactful products.
        </GlowingCard>
      </motion.div>
    </div>
  );
}

function GlowingCard({ color, title, children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`relative bg-[#181a38] bg-opacity-95 rounded-lg p-6 border-l-8 ${color} shadow-lg hover:shadow-pink-200 transition duration-300 group w-full`}
    >
      <div
        className={`absolute -left-8 top-4 w-24 h-1/2 rounded-xl blur-lg bg-gradient-to-tr ${color} opacity-20 group-hover:opacity-40`}
      />
      <h3 className="font-bold text-lg text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-base">{children}</p>
    </motion.div>
  );
}
