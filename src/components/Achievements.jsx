// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React, { useState } from "react";
import holopin from '../assets/holopin.png'
import gssoc from '../assets/gssoc.png'
import osci from '../assets/osci.png'
import ssoc from '../assets/ssoc.png'

const achievements = [
  {
    title: "Secured super Contributor holopin badge in hacktoberfest 2025",
    desc: "With enhanced contributions to open source projects during Hacktoberfest 2025, I earned the prestigious Super Contributor Holopin badge.",
    link: "https://holopin.me/soumyosish",
    image: holopin,
    shadowColor: "rgba(255, 255, 255, 0.7)",
  },
  {
    title: "Top 15 in GSSoC 2025",
    desc: "Enriched my knowledge and skills through learning and contributing to open source projects, securing a position in the top 15 participants of GSSoC 2025.",
    link: "https://drive.google.com/file/d/1MyV7FQ-S_tOyRW_BPXzjbur1gAUdJi_V/view?usp=drive_link",
    image: gssoc,
    shadowColor: "rgba(255, 210, 150, 1)",
  },
  {
    title: "4th Rank in OSCI Competition",
    desc: "Achieved 4th place in the Open Source Connect India 2025 with consistent debugging and exploring newer technologies.",
    link: "https://drive.google.com/file/d/1-UHhprULvpoCJ40oh9RkrSdViOCbAoqK/view?usp=sharing",
    image: osci,
    shadowColor: "rgba(59, 130, 246, 1)",
  },
  {
    title: "Social Summer of Code",
    desc: "Successfully completed the Social Summer of Code program by improving major open source projects and initiating my journey towards open source.",
    link: "https://drive.google.com/file/d/1VV5f6zNgopYzM-tUHSumOKnTWk7BQt4K/view?usp=sharing",
    image: ssoc,
    shadowColor: "rgba(255, 255, 180, 1)",
  },
];

export default function Achievements() {
  const [showAll, setShowAll] = useState(false);
  const visibleAchievements = showAll ? achievements : achievements.slice(0, 2);

  return (
    <section className="w-full py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-transparent bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400 bg-clip-text font-extrabold text-2xl sm:text-3xl mb-6 sm:mb-8 text-center select-none"
      >
        Achievements
      </motion.h2>

      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-x-10 md:gap-x-12 gap-y-10 sm:gap-y-12 md:gap-y-14 w-full max-w-5xl">
          {visibleAchievements.map((ach, idx) => (
            <motion.div
              key={ach.title}
              className="bg-[#101210] rounded-xl overflow-hidden shadow-[0_8px_32px_4px_rgba(98,74,205,0.2)] flex flex-col h-full transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.1 }}
              style={{
                boxShadow: `0 0 25px 8px ${ach.shadowColor}, 0 8px 32px 4px rgba(98,74,205, 0.2)`,
              }}
            >
              {/* Achievement Cover */}
              <div className="relative w-full bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                <img
                  src={ach.image}
                  alt={ach.title}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Achievement Info */}
              <div className="p-2.5 sm:p-3 md:p-4 flex flex-col flex-grow">
                <h3 className="text-white font-bold text-xs sm:text-sm mb-1 line-clamp-2 hover:text-cyan-300 transition-colors">
                  {ach.title}
                </h3>
                <p className="text-gray-300 text-xs mb-2 flex-grow line-clamp-2">
                  {ach.desc}
                </p>

                {/* View Details Button */}
                {ach.link && (
                  <a
                    href={ach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-auto text-blue-400 hover:text-cyan-300 font-bold text-xs transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H7m10 0v10" />
                    </svg>
                    VIEW DETAILS
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {achievements.length > 2 && (
        <div className="w-full mx-auto mt-6 sm:mt-8 flex justify-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-green-500 hover:from-green-500 hover:to-cyan-500 text-white text-xs sm:text-sm font-bold shadow-lg transition-all"
          >
            {showAll ? "Show Less Achievements" : "Show More Achievements"}
          </button>
        </div>
      )}
    </section>
  );
}
