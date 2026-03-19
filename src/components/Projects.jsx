import { useState } from "react";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import bengalfusion from "../assets/bengalfusion.png";
import alphasafari from "../assets/alphasafari.png";
import insticgpa from "../assets/insticgpa.png";
import vayu from "../assets/vayu.png";
import guess from "../assets/guess.png";
import jobsy from "../assets/jobsy.png";
import mazesolver from "../assets/mazesolver.png";
import candy from "../assets/candy.png";
import tommy from "../assets/tommy.png"
import hollistic from '../assets/hollistic.png'
import gateway from '../assets/gateway.png'
import coffee from '../assets/coffee.png'
import api_react from '../assets/api_react.png'
import homedine from '../assets/homedine.png'
const projects = [
  {
    name: "Alpha Safari",
    desc: "Alpha Safari is an interactive Virtual Zoo designed to help students learn the alphabet by exploring various animals, their names, and detailed information.",
    image: alphasafari,
    link: "https://alpha-safari.vercel.app/",
    tags: [
      "React",
      "Styled Component",
      "Node.js",
      "Express",
      "MongoDB",
      "Framer Motion",
      "JWT",
      "Nodemailer",
      "Responsive Design",
      "Full Stack",
    ],
    github: "https://github.com/Soumyosish/AlphaSafari",
    shadowColor: "rgba(34,197,94,0.7)",
  },
  {
    name: "Home Dine",
    desc: "HomeDine is a full-stack ecommerce web application focused on quality kitchen and home products for every home.",
    image: homedine,
    link: "http://home-dine.vercel.app/",
    tags: [
      "React",
      "React Router",
      "Context API",
      "Axios",
      "Express",
      "MongoDB",
      "TailwindCSS",
      "JWT",
      "Nodemailer",
      "Responsive Design",
      "Full Stack",
    ],
    github: "https://github.com/Soumyosish/HomeDine",
    shadowColor: "rgba(255, 253, 208, 1)",
  },
  {
    name: "Maze Solver Visualizer",
    desc: "A modern, interactive maze generator and pathfinding visualizer to Explore classic algorithms with smooth animations, a glassmorphism UI, and a live complexity panel.",
    image: mazesolver,
    link: "https://bhul-bhulaya.vercel.app/",
    tags: ["HTML", "Tailwind CSS", "JS", "Express", "Node.js"],
    github: "https://github.com/Soumyosish/BhulBhulaya",
    shadowColor: "rgba(59, 130, 246, 1)",
  },
  {
    name: "API React",
    desc: "A modern React SPA built with Vite that demonstrates real-world API integration, client-side routing, reusable components, and polished UI patterns, showcasing best practices for building scalable React applications.",
    image: api_react,
    link: "https://api-react-nine-iota.vercel.app/",
    tags: [
      "React",
      "BootStrap",
      "Responsive Design",
      "React Icons",
      'APIs'
    ],
    github: "https://github.com/Soumyosish/API-React",
    shadowColor: "rgba(255, 255, 255, 0.7)",
  },
  {
    name: "Bengal Fusion",
    desc: "Bengal Fusion is a web application that showcases the rich culture, art, festivals, tourist destinations through vibrant design, smooth animations & interactive elements.",
    image: bengalfusion,
    link: "https://bengalfusion.vercel.app/",
    tags: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Framer Motion",
      "Responsive Design",
      "Full Stack",
    ],
    github: "https://github.com/Soumyosish/BengalFusion",
    shadowColor: "rgba(255, 253, 208, 1)",
  },
  {
    name: "Virtual AI Assistant",
    desc: "A modern, interactive voice-command virtual assistant to help with tasks like searching the web, opening websites, telling jokes, and more, all through a sleek glassmorphism UI.",
    image: tommy,
    link: "https://github.com/Soumyosish/Tommy",
    tags: ["React", "Tailwind CSS", "JS", "Express", "Node.js"],
    github: "https://github.com/Soumyosish/Tommy",
    shadowColor: "rgba(59, 130, 246, 1)",
  },
  {
    name: "Hollistic Wellness Monitor",
    desc: "Holistic Wellness Monitor is a comprehensive, full-stack health and fitness tracking application designed to help users monitor their physical well-being.",
    image: hollistic,
    link: "https://github.com/Soumyosish/Holistic-Wellness-Monitor",
    tags: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Nodemailer",
      "Google Auth",
      "Recharts",
      "Lucide",
      "Gemini API",
      "Responsive Design",
      "Full Stack",
    ],
    github: "https://github.com/Soumyosish/Holistic-Wellness-Monitor",
    shadowColor: "rgba(255, 255, 255, 0.7)",
  },
  {
    name: "Espresso Moment",
    desc: "A modern, responsive coffee shop website showcasing premium coffee offerings, gallery, and contact features. Built with clean HTML, CSS, and JavaScript. Expressing the love of people towards coffee depicting their part of everyday's life reluctantly impressive with rich hopes among everyone.",
    image: coffee,
    link: "https://expresso-moment.vercel.app/",
    tags: [
      "HTML",
      "CSS",
      "Responsive Design",
      "JS"
    ],
    github: "https://github.com/Soumyosish/Expresso-Moment",
    shadowColor: "rgba(255, 210, 150, 1)",
  },
  {
    name: "Gateway To the East",
    desc: "Gateway to the East describes the tourism for Bengal with animated cards, destination highlights, and smooth section navigation making it align with the rich culture and diversity of the state attracting various tourists from all over the world",
    image: gateway,
    link: "https://gateway-to-the-east.vercel.app/",
    tags: [
      "HTML",
      "CSS",
      "Responsive Design",
      "JS"
    ],
    github: "https://github.com/Soumyosish/Gateway-to-the-East",
    shadowColor: "rgba(255, 255, 180, 1)",
  },
  {
    name: "Jobsy",
    desc: "Jobsy is a simple yet powerful web application designed to help users efficiently track and manage their job application journey from the initial application to receive an offer.",
    image: jobsy,
    link: "https://jobsy-rose.vercel.app/",
    tags: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Framer Motion",
      "Responsive Design",
      "Full Stack",
      "Nodemailer",
      "JWT",
    ],
    github: "https://github.com/Soumyosish/JobSY",
    shadowColor: "rgba(255, 255, 180, 1)",
  },
  {
    name: "Insti-CGPA Calculator",
    desc: "A user-friendly web-based CGPA (Cumulative Grade Point Average) calculator based on university grading system. It allows users to add multiple courses, input course units and grades, and calculates the GPA with a clean, modern UI and responsive design.",
    image: insticgpa,
    link: "https://insti-cgpa-calculator.vercel.app",
    tags: ["HTML", "Tailwind CSS", "JS"],
    github: "https://github.com/Soumyosish/Insti-CGPA-Calculator",
    shadowColor: "rgba(135, 206, 235)",
  },
  {
    name: "Candy Crush Game",
    desc: "A modern Candy Crush-inspired puzzle game built with HTML, TailwindCSS, and Vanilla JavaScript. This project demonstrates drag-and-swap mechanics, match detection, cascading effects, scoring system, and a beautiful glassmorphism UI.",
    image: candy,
    link: "https://candy-crush-six-phi.vercel.app",
    tags: ["REACT", "Tailwind CSS", "JS"],
    github: "https://github.com/Soumyosish/candy-crush",
    shadowColor: "rgba(216, 180, 254)",
  },
  {
    name: "Weather App",
    desc: "A user-friendly web-based Weather App that provides real-time weather information for any location worldwide and also get to know about the humidity, pressure, wind speed and a glimpse of the weather.",
    image: vayu,
    link: "https://vayu-vakya.vercel.app",
    tags: ["REACT", "Tailwind CSS", "OPEENWEATHERMAP API"],
    github: "https://github.com/Soumyosish/weatherapp",
    shadowColor: "rgba(255,255,255)",
  },
  {
    name: "Guessing a number game",
    desc: "A number guessing game where the player has to guess a randomly generated number between 1 and 100 within a limited number of attempts.",
    image: guess,
    link: "https://guessing-a-number-game.vercel.app",
    tags: ["HTML", "Tailwind CSS", "JS"],
    github: "https://github.com/Soumyosish/Guessing-a-number-game",
    shadowColor: "rgb(253, 186, 116)",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="3"
      className="w-full min-h-screen py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 flex flex-col items-center"
    >
      {/* Heading and subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: -28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-transparent bg-gradient-to-r from-orange-400 via-teal-300 to-yellow-200 bg-clip-text font-extrabold text-2xl sm:text-3xl mb-4 sm:mb-6 text-center select-none"
      >
        Projects
      </motion.h2>
      <br />
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 gap-y-10 sm:gap-y-12 md:gap-y-14 w-full max-w-6xl">
        {displayProjects.map((project) => (
          <motion.div
            key={project.name}
            className="bg-[#101210] rounded-2xl overflow-hidden shadow-[0_8px_32px_4px_rgba(98,74,205,0.2)] flex flex-col h-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{
              boxShadow: `0 0 15px 5px ${project.shadowColor}, 0 8px 32px 4px rgba(98,74,205, 0.2)`,
            }}
          >
            {/* Project Cover */}
            <div className="relative w-full bg-[#232347]">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto block rounded-t-2xl"
              />
            </div>
            {/* Project Info */}
            <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
              {/* Title + GitHub */}
              <div className="flex items-center justify-between mb-2 gap-3">
                <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl leading-snug">
                  {project.name}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition text-white text-lg sm:text-xl shrink-0"
                  title="View on GitHub"
                >
                  <svg
                    width={26}
                    height={26}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .296a12 12 0 0 0-3.796 23.412c.6.108.82-.26.82-.578v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.389-1.332-1.758-1.332-1.758-1.089-.744.084-.729.084-.729 1.205.086 1.84 1.237 1.84 1.237 1.072 1.838 2.812 1.307 3.498.998.107-.776.419-1.308.763-1.61-2.665-.304-5.466-1.333-5.466-5.931 0-1.311.469-2.382 1.237-3.22-.124-.304-.536-1.527.117-3.184 0 0 1.008-.322 3.305 1.23a11.49 11.49 0 0 1 6.018 0c2.295-1.552 3.302-1.23 3.302-1.23.654 1.657.242 2.88.118 3.184.77.838 1.236 1.909 1.236 3.22 0 4.608-2.803 5.625-5.475 5.922.43.371.814 1.103.814 2.223v3.293c0 .318.218.69.825.573A12.001 12.001 0 0 0 12 .296" />
                  </svg>
                </a>
              </div>
              {/* Description - smaller font */}
              <p className="text-gray-300 text-sm sm:text-base mb-3 font-light leading-relaxed">
                {project.desc}
              </p>
              {/* Tags - smaller */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 sm:px-3 py-0.5 rounded-full text-[10px] sm:text-xs bg-[#232347] text-gray-200 font-medium shadow hover:bg-[#2078fa] hover:text-white cursor-pointer transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Visit Site Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 sm:mt-6 px-4 sm:px-5 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-violet-500 text-white font-semibold shadow hover:from-pink-500 hover:to-blue-500 transition text-xs sm:text-sm text-center"
              >
                Visit Website &rarr;
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      {!showAll && projects.length > 3 && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-10 sm:mt-12 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-gradient-to-l text-white text-sm sm:text-base font-bold shadow-lg transition"
        >
          Show More
        </button>
      )}
    </section>
  );
}
