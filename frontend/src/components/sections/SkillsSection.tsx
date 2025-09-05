import { useRef } from "react";
import { SKILL_CATEGORY, STATS, TECH_STACK } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import { useInView, useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLSelectElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const skillBarVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level: number): any => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeOut",
        delay: 0.2,
      },
    }),
  };
  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 px-6 text-gray-900 bg-gray-50 dark:bg-gray-950 dark:text-white relative overflow-hidden"
    >
      {/* background elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-40 right-1/4 w-72 h-72 rounded-full bg-blue-400/20 dark:bg-blue-500/20"
          style={{ filter: "blur(90px)" }}
        />

        <div
          className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full bg-purple-400/10 dark:bg-purple-500/10"
          style={{ filter: "blur(100px)" }}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* section header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="uppercase tracking-widest text-gray-600 dark:text-gray-500 mb-4"
          >
            Technical Expertise
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-7xl font-light mb-6"
          >
            Skills &{" "}
            <span className="text-blue-500 dark:text-blue-400 font-medium">
              {" "}
              Technologies
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg max-w-2xl mx-auto font-light text-gray-600 dark:text-gray-400"
          >
            A comprehensive toolkit for building modern, scalable web
            applications from concept to deployments.
          </motion.p>
        </motion.div>

        {/* skill grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {SKILL_CATEGORY.map((category, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 rounded-2xl border bg-white/80 border-gray-200 dark:bg-gray-900/50 dark:border-gray-800 backdrop-blur-sm"
              >
                {/* category header */}
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 mr-4">
                    <category.icon
                      size={24}
                      className="text-blue-500 dark:text-blue-400"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1">
                      {category.title}
                    </h3>
                    <p className="text-md text-gray-600 dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills list */}
                <div className="space-y-3">
                  {category.skills.map((skill, index) => {
                    return (
                      <div key={index} className="group">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-600 dark:text-gray-500">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="h-2 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                          <motion.div
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={skillBarVariants}
                            custom={skill.level}
                            className={`h-full ${skill.color} rounded-full relative`}
                          >
                            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </motion.div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* additional skills */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">Also Working With</h3>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2"
          >
            {TECH_STACK.map((tech, index) => {
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="px-4 py-2 rounded-full border transition-all duration-300 bg-white border-gray-300 text-gray-700 hover:border-gray-400 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600"
                >
                  {tech}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* stats */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {STATS.map((stat, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-light text-blue-500 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
