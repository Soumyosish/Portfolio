// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React, { useState } from "react";
import project from '../assets/project.png'
import genai from '../assets/genai.png'
import dsa from '../assets/dsa.png'
import postman1 from '../assets/postman1.png'
import mern from '../assets/mern.png'
import cssbasics from '../assets/cssbasics.png'

const certifications = [
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "August 2025",
    link: "https://api.badgr.io/public/assertions/tWdNPkTaS2S05S0EyL65mw",
    image: postman1,
    shadowColor: "rgba(255, 255, 255, 0.7)",
  },
  {
    title: "Full Stack Development with MERN",
    issuer: "CipherSchools",
    date: "July 2025",
    link: "https://cipherschools.com/certificate/preview?id=687d3de13eaa79325b2d27bc",
    image: mern,
    shadowColor: "rgba(255, 253, 208, 1)",
  },
  {
    title: "DSA With Java",
    issuer: "Apna College",
    date: "June 2025",
    link: "https://drive.google.com/file/d/1Trc_RCX6gMjA8Rh0VeRz5lthoDC49HgH/view?usp=sharing",
    image: dsa,
    shadowColor: "rgba(255, 255, 255, 0.7)",
  },
  {
    title: "CSS Basics",
    issuer: "Hackerrank",
    date: "July 2024",
    link: "https://www.hackerrank.com/certificates/iframe/1e399aadfd52",
    image: cssbasics,
    shadowColor: "rgba(255, 253, 208, 1)",
  },
  {
    title: "Introduction to GenAI",
    issuer: "Google Cloud",
    date: "January 2024",
    link: "https://www.cloudskillsboost.google/public_profiles/b7468a70-60d4-4eef-9f62-171154055820/badges/7700454?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    image: genai,
    shadowColor: "rgba(255, 255, 255, 0.7)",
  },
  {
    title: "Career Essentials in Project Management by microsoft and Linkedin",
    issuer: "Linkedin Learning",
    date: "October 2023",
    link: "https://www.linkedin.com/learning/certificates/7896f0cfd5bcf189420df58762e6cbe3fa5f689caafdd8f74d77ec344c693703",
    image: project,
    shadowColor: "rgba(255, 253, 208, 1)",
  },
];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const visibleCertifications = showAll ? certifications : certifications.slice(0, 2);

  return (
    <section id="4" className="w-full py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text font-extrabold text-2xl sm:text-3xl mb-6 sm:mb-8 text-center select-none"
      >
        Certifications
      </motion.h2>

      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-x-12 md:gap-x-16 gap-y-12 sm:gap-y-14 md:gap-y-16 w-full max-w-4xl">
          {visibleCertifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              className="bg-[#101210] rounded-xl overflow-hidden shadow-[0_8px_32px_4px_rgba(98,74,205,0.2)] flex flex-col h-full transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.1 }}
              style={{
                boxShadow: `0 0 25px 8px ${cert.shadowColor}, 0 8px 32px 4px rgba(98,74,205, 0.2)`,
              }}
            >
              {/* Certificate Cover */}
              <div className="relative w-full bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden aspect-[16/10]">
                {cert.isIframe ? (
                  <iframe
                    src={cert.image}
                    title={cert.title}
                    className="w-full h-full"
                    style={{ border: 'none' }}
                  />
                ) : (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>

              {/* Certificate Info */}
              <div className="p-2 sm:p-3 md:p-4 flex flex-col flex-grow">
                <h3 className="text-white font-bold text-xs sm:text-sm mb-1 line-clamp-2 hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
                <div className="text-gray-300 text-xs font-medium mb-0.5">{cert.issuer}</div>
                <div className="text-gray-400 text-xs mb-2">{cert.date}</div>

                {/* View Certificate Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-auto text-blue-400 hover:text-cyan-300 font-bold text-xs transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7m10 0v10" />
                  </svg>
                  VIEW CERTIFICATE
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {certifications.length > 2 && (
        <div className="w-full mx-auto mt-6 sm:mt-8 flex justify-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white text-xs sm:text-sm font-bold shadow-lg transition-all"
          >
            {showAll ? "Show Less Certifications" : "Show More Certifications"}
          </button>
        </div>
      )}
    </section>
  );
}
