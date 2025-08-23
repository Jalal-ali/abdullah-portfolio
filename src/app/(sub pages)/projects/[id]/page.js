"use client";
import { projectsData } from "@/app/data"; // adjust path
import Image from "next/image";
import bg from "../../../../../public/background/projects-background.png";
import { motion } from "framer-motion";




export default function ProjectPage({ params }) {
  const { id } = params;
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <p className="text-center text-white min-h-screen flex items-center justify-center">
        Project not found.
      </p>
    );
  }

  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-30 blur-[1px]"
      />
      {/* HEADLINE */}
        <div className="z-50 py-8 text-center">
          <h1
            className="text-transparent text-[3rem] font-extrabold uppercase leading-tight md:text-[3rem] text-glow-stroke-neon"
            style={{
              // textShadow: "0 0 10px #fcf699, 0 0 20px #fcf699, 0 0 40px #fcf699"
            }}
          >
           Project Overview
          </h1>
        </div>
      {/* <div className=" w-full flex flex-col items-center justify-center">
      </div> */}
      {/* <div className="items-center text-center ">
          <h1 className="font-bold text-7xl text-accent">Muhammad Abdullah</h1>
          <p className="font-light text-foreground text-ls">
            Meet the wizard behind this portfolio
          </p>
        </div> */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="custom-bg w-full md:max-w-xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl flex items-center justify-center"
      >

        <div className="w-full space-y-4 text-center">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            {project.name}
          </h1>
          {/* Project Details */}
          <div className="space-y-3 text-sm sm:text-base md:text-lg">
            <p className="text-gray-400">
              <span className="font-semibold text-white">Description:</span>{" "}
              {project.description}
            </p>

            <p className="text-gray-400">
              <span className="font-semibold text-white">Date:</span>{" "}
              📅    {new Date(project.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}
            </p>

            <p className="text-gray-400 break-words">
              <span className="font-semibold text-white">Demo Link:</span>{" "}
              <a
                href={
                  project.demoLink.startsWith("http")
                    ? project.demoLink
                    : `https://${project.demoLink}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:underline"
              >
                {project.demoLink}
              </a>
            </p>
          </div>

          {/* Button */}
          <a
            href={
              project.demoLink.startsWith("http")
                ? project.demoLink
                : `https://${project.demoLink}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 text-black px-4 sm:px-6 py-2 rounded-lg font-medium shadow-lg hover:bg-yellow-400 transition mt-4 text-sm sm:text-base md:text-lg"
          >
            View Demo
          </a>
        </div>
      </motion.div>


    </>
  );
}
