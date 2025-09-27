// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
const achievements = [
  {
    title: "4th Rank in OSCI Competition",
    desc: "Achieved 4th place in the Open Source Connect India 2025 with consistent debugging and exploring newer technologies.",
    link: "https://www.osconnect.org/leaderboard",
  },
  {
    title: "Social Summer of Code ",
    desc: "Successfully completed the Social Summer of Code program by improving major open source projects and initiating my journey towards open source.",
    link: "https://drive.google.com/file/d/1VV5f6zNgopYzM-tUHSumOKnTWk7BQt4K/view?usp=sharing",
  },
];

export default function Achievements() {
  return (
    <section className="w-full min-h-screen py-12 px-4 md:px-12 ">
      <motion.h2
        initial={{ opacity: 0, y: -28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-lg md:text-xl font-black text-white mb-10 text-left max-w-6xl mx-auto"
      >
        Achievements
      </motion.h2>
      <div className="flex flex-col gap-8 max-w-6xl mx-auto">
        {achievements.map((ach, idx) => (
          <motion.div
            key={idx}
            className="bg-[#111111] rounded-2xl px-8 py-6 border border-gray-600"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 + idx * 0.1, ease: "easeOut" }}
          >
            <h3 className="text-white text-xl font-semibold mb-2">
              {ach.title}
            </h3>
            <p className="text-gray-300 text-base mb-3">{ach.desc}</p>
            {ach.link && (
              <a
                href={ach.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 3h7v7m-7-7L10 14m-7 7h7a2 2 0 002-2v-7"
                  />
                </svg>
                View Details
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
