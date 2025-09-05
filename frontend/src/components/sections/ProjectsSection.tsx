import { motion, useInView } from "framer-motion";
import { PROJECTS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import ProjectCard from "../ProjectCard";
import { useRef } from "react";

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLSelectElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-24 px-6 text-gray-900 bg-gray-50 dark:bg-gray-950 dark:text-white relative overflow-hidden"
    >
      {/*  Background elements */}
      <motion.div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 bg-blue-400 dark:bg-blue-500" />

        <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full blur-2xl  opacity-5 bg-purple-400 dark:bg-purple-500" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="uppercase tracking-widest text-gray-600 dark:text-gray-500 mb-4"
          >
            Featured Work
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-7xl font-light mb-6"
          >
            Recent{" "}
            <span className="text-blue-500 dark:text-blue-400 font-medium">
              Projects
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg max-w-2xl mx-auto font-light text-gray-600 dark:text-gray-400"
          >
            A collection of projects that showcase my expertise in building
            modern web applications and solving complex problems.
          </motion.p>
        </motion.div>

        {/* projects grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
