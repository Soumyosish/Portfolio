// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
const certifications = [
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "August 2025",
    link: "https://api.badgr.io/public/assertions/tWdNPkTaS2S05S0EyL65mw",
  },
  {
    title: "Full Stack Development with MERN",
    issuer: "CipherSchools",
    date: "July 2025",
    link: "https://cipherschools.com/certificate/preview?id=687d3de13eaa79325b2d27bc",
  },
  {
    title: "DSA With Java",
    issuer: "Apna College",
    date: "June 2025",
    link: "https://drive.google.com/file/d/1Trc_RCX6gMjA8Rh0VeRz5lthoDC49HgH/view?usp=sharing",
  },
  {
    title: "CSS Basics",
    issuer: "Hackerrank",
    date: "July 2024",
    link: "https://www.hackerrank.com/certificates/1e399aadfd52",
  },
  {
    title: "Introduction to GenAI",
    issuer: "Google Cloud",
    date: "January 2024",
    link: "https://www.cloudskillsboost.google/public_profiles/b7468a70-60d4-4eef-9f62-171154055820/badges/7700454?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Career Essentials in Project Management by microsoft and Linkedin",
    issuer: "Linkedin Learning",
    date: "October 2023",
    link: "https://www.linkedin.com/learning/certificates/7896f0cfd5bcf189420df58762e6cbe3fa5f689caafdd8f74d77ec344c693703",
  },
];

export default function Certifications() {
  return (
    <section id="4" className="w-full min-h-screen py-12 px-2 md:px-12">
      <motion.h2
        initial={{ opacity: 0, y: -28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-lg md:text-xl font-black text-white mb-8 text-left"
      >
        Certifications
      </motion.h2>
      <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 + idx * 0.1, ease: "easeOut" }}
            className="border border-gray-500/50 rounded-2xl px-8 py-6 bg-[#111112] w-full"
          >
            <h3 className="text-white font-bold text-xl mb-1">{cert.title}</h3>
            <div className="text-gray-300 text-base mb-2">{cert.issuer}</div>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm mt-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mb-0.5 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 3h7m0 0v7m0-7L10 14m-7 7h7a2 2 0 002-2v-7"
                />
              </svg>
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
