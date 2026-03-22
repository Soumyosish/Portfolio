// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
import vsn from '../assets/vsn.avif'
import lpu from '../assets/lpu.jpg'

const educationData = [
  {
    year: "2023-2027",
    degree: "Bachelor of Technology in CSE",
    institution: "Lovely Professional University",
    description: "Focused on software development, algorithms, and web technologies.",
    cgpa: "7.48",
    keySkills: ["Full Stack", "Data Structures", "CS Fundamentals"],
    shadowColor: "rgba(6, 182, 212, 0.5)",
    gradientFrom: "from-cyan-900/60",
    gradientTo: "to-teal-900/60",
    borderColor: "border-cyan-500/50",
    hoverBorder: "hover:border-cyan-400/80",
    image: lpu,
  },
  {
    year: "2022-2023",
    degree: "Higher Secondary Education",
    institution: "Vidyasagar Shishu Niketan",
    description: "Focused on learning core Science subjects strengthening the base of Computer Science.",
    cgpa: "84.75%",
    keySkills: ["Physics", "Chemistry", "Mathematics", "Biology"],
    shadowColor: "rgba(14, 165, 233, 0.5)",
    gradientFrom: "from-blue-900/60",
    gradientTo: "to-sky-900/60",
    borderColor: "border-sky-500/50",
    hoverBorder: "hover:border-sky-400/80",
    image: vsn,
  },
];

export default function Education() {
  return (
    <section className="w-full py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-10 bg-black flex flex-col items-center">
      <motion.div
        className="w-full max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-4"
        >
          Education
        </motion.h2>

        {/* Underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 150 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1.5 bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 rounded-full mb-14 md:mb-16"
        ></motion.div>

        {/* Timeline Container */}
        <div className="relative flex flex-col gap-20 md:gap-24">
          {/* Vertical Timeline Line - LEFT */}
          <div className="hidden md:block absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-teal-400 to-blue-400"></div>

          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-6 md:gap-0 relative md:pl-24"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.2 }}
            >
              {/* Timeline Dot Ball - LEFT SIDE */}
              <motion.div
                className={`hidden md:block absolute left-2 top-8 w-6 h-6 rounded-full shadow-lg z-20 ${
                  idx === 0
                    ? "bg-cyan-400 shadow-cyan-400/60"
                    : "bg-sky-400 shadow-sky-400/60"
                }`}
                whileHover={{ scale: 1.2 }}
              ></motion.div>

              {/* Card Content - RIGHT SIDE */}
              <motion.div
                className={`w-full bg-gradient-to-br ${edu.gradientFrom} ${edu.gradientTo} rounded-2xl overflow-hidden ${edu.borderColor} ${edu.hoverBorder} transition-all duration-300 flex flex-col md:flex-row md:items-center border`}
                style={{
                  boxShadow: `0 0 40px 10px ${edu.shadowColor}, 0 8px 32px 4px rgba(0, 0, 0, 0.3)`,
                }}
                whileHover={{ translateY: -8, scale: 1.02 }}
              >
                {/* Text Content */}
                <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center flex-1">
                  {/* Year */}
                  <motion.div
                    className={`font-bold text-sm sm:text-base mb-2 ${
                      idx === 0 ? "text-cyan-300" : "text-sky-300"
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + idx * 0.2 }}
                  >
                    {edu.year}
                  </motion.div>

                  {/* Degree */}
                  <motion.h3
                    className="text-white font-bold text-lg sm:text-xl mb-2 uppercase tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + idx * 0.2 }}
                  >
                    {edu.degree}
                  </motion.h3>

                  {/* Institution */}
                  <motion.p
                    className="text-gray-200 italic text-xs sm:text-sm mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + idx * 0.2 }}
                  >
                    {edu.institution}
                  </motion.p>

                  {/* Description */}
                  <motion.p
                    className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + idx * 0.2 }}
                  >
                    {edu.description}
                  </motion.p>

                  {/* CGPA */}
                  <motion.div
                    className="flex items-center gap-2 mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 + idx * 0.2 }}
                  >
                    <span className="text-gray-200 font-semibold text-xs sm:text-sm">CGPA:</span>
                    <span className={`font-bold text-xs sm:text-sm ${
                      idx === 0 ? "text-cyan-300" : "text-sky-300"
                    }`}>
                      {edu.cgpa}
                    </span>
                  </motion.div>

                  {/* Key Skills */}
                  <motion.div
                    className="flex flex-col gap-1.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + idx * 0.2 }}
                  >
                    <span className="text-gray-200 font-semibold text-xs sm:text-sm">Key Skills:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.keySkills.map((skill, skillIdx) => (
                        <motion.span
                          key={skillIdx}
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium transition-all ${
                            idx === 0
                              ? "bg-cyan-500/25 border border-cyan-400/50 text-white hover:bg-cyan-500/40 hover:border-cyan-300/80"
                              : "bg-sky-500/25 border border-sky-400/50 text-white hover:bg-sky-500/40 hover:border-sky-300/80"
                          }`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Image Section */}
                <motion.div
                  className="w-full md:w-100 h-68 md:h-92 flex-shrink-0 overflow-hidden rounded-tr-2xl rounded-br-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + idx * 0.2 }}
                >
                  <img
                    src={edu.image}
                    alt={edu.degree}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}