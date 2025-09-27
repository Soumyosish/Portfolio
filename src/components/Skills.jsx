import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import github from "../assets/github.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import express from "../assets/express.png";
import node from "../assets/node.jpeg";
import git from "../assets/git.png";
import html from "../assets/html.jpg";
import java from "../assets/java.jpg";
import mongodb from "../assets/mongodb.png";
import vscode from "../assets/vscode.png";
import tailwind from "../assets/tailwind.png";
import nextjs from "../assets/nextjs.jpg";
import postman from "../assets/postman.png";

export default function Skills() {
  const logos = [
    html,
    css,
    js,
    tailwind,
    mongodb,
    react,
    node,
    express,
    vscode,
    git,
    github,
    java,
    nextjs,
    postman,
  ];

  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const scrollWidth = container.scrollWidth / 2;

      gsap.set(container, { x: 0 });

      animationRef.current = gsap.to(container, {
        x: -scrollWidth,
        ease: "linear",
        duration: 30,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % -scrollWidth),
        },
      });
    }, containerRef);

    return () => {
      animationRef.current?.kill();
      ctx.revert();
    };
  }, []);

  return (
    <div className="relative w-full py-8 overflow-hidden bg-black">
      <h2 className="text-transparent bg-gradient-to-r from-blue-400 via-teal-300 to-green-400 bg-clip-text font-extrabold text-3xl mb-6 text-center select-none">
        Technologies & Skills
      </h2>
      <br />
      <br />
      <div ref={containerRef} className="flex whitespace-nowrap w-[200%]">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="inline-block h-14 w-auto mx-6"
            draggable={false}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
