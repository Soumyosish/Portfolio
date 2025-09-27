// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
export default function Footer() {
  return (
    <footer
      id="5"
      className="relative pt-10 pb-4 px-6 md:px-16 w-full bg-gradient-to-r from-[#181e2f] via-[#194353] to-[#231a44]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-10 gap-3 md:gap-0">
        {/* Name on left */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="font-bold text-white text-lg md:text-xl"
        >
          Soumyosish Pal
        </motion.div>

        {/* Email in middle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="text-white text-sm md:text-base font-medium"
        >
          <a
            href="mailto:soumyosishpal.108@gmail.com"
            className="hover:underline"
          >
            soumyosishpal.108@gmail.com
          </a>
        </motion.div>

        {/* Social links on right */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
          className="flex space-x-8"
        >
          <FooterLink href="https://github.com/soumyosish" label="GitHub" />
          <FooterLink
            href="https://linkedin.com/in/soumyosishpal"
            label="LinkedIn"
          />
          <FooterLink
            href="https://leetcode.com/u/user2431m/"
            label="LeetCode"
          />
        </motion.div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        scale: 1.07,
        color: "#cbd5e1",
        textShadow: "0 0 12px #a5b4fc, 0 0 8px #818cf8",
        filter: "blur(0.2px)",
      }}
      transition={{ type: "spring", stiffness: 270, damping: 15 }}
      className="text-gray-300 text-base font-semibold transition-colors duration-500 ease-in-out hover:text-gray-100"
      style={{ textShadow: "none" }}
    >
      {label}
    </motion.a>
  );
}
