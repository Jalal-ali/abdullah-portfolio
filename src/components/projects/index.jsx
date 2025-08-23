"use client";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const ProjectList = ({ projects }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-auto  xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
    >
      {/* <div className="z-50 pt-12 text-center">
        <h1 className="text-transparent text-[3rem] font-extrabold uppercase leading-tight md:text-[5rem] text-stroke-neon">
          PROJECTS
        </h1>
        <h2 className="text-amethyst-neon mt-2 text-[1.25rem] font-semibold uppercase leading-snug md:text-[1.875rem]">
          My  Work
        </h2>
      </div> */}
      {/* HEADLINE */}
        <div className="z-50 pt-8 text-center">
          <h1
            className="text-transparent text-[3rem] font-extrabold uppercase leading-tight md:text-[3rem] text-glow-stroke-neon"
            style={{
              // textShadow: "0 0 10px #fcf699, 0 0 20px #fcf699, 0 0 40px #fcf699"
            }}
          >
            PROJECTS
          </h1>
          <h2 className="text-amethyst-neon mt-1 text-[1rem] font-semibold uppercase leading-snug md:text-[1.6rem]">
            My  Work
          </h2>
        </div>
      {projects.map((project, index) => {
        return <ProjectLayout key={index} {...project} />;
      })}
    </motion.div>
  );
};

export default ProjectList;
