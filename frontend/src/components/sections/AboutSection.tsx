import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { JOURNEY_STEPS, PASSIONS } from "../../utils/data";
import { useRef } from "react";

import SIGNATURE from "../../assets/images/signature.png";
import { containerVariants, itemVariants } from "../../utils/helper";

const AboutSection = () => {
  const sectionRef = useRef<HTMLSelectElement | null>(null);
  const timeLineRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const timeLineInView = useInView(timeLineRef, {
    once: true,
    margin: "-50px",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const timeLineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 text-gray-900 bg-white dark:bg-gray-900 dark:text-white relative overflow-hidden"
    >
      {/* background elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-5 bg-blue-400 dark:bg-blue-500" />

        <div className="absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl  opacity-5 bg-purple-400 dark:bg-purple-500" />
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
            Get to Know Me
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-7xl font-light mb-6"
          >
            About{" "}
            <span className="text-blue-500 dark:text-blue-400 font-medium">
              Me
            </span>
          </motion.h2>
        </motion.div>

        {/* Personal Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-2xl border bg-gray-50/80 border-gray-200 dark:bg-gray-800/50 dark:border-gray-700 backdrop-blur-sm "
            >
              <h3 className="text-2xl font-medium mb-6">My Mission</h3>
              <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                I believe technology should be a bridge that connects people and
                solves real-world problems. My passion lies in crafting digital
                experiences that are not just functional, but delightful and
                accessible to everyone.
              </p>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                When I'm not coding, you'll find me exploring new frameworks,
                contributing to open source, or mentoring aspiring developers. I
                love the constant evolution of web technologies and the endless
                possibilities they bring to create meaningful digital
                experiences.
              </p>
            </motion.div>

            {/* what i love building */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl front-medium mb-6">
                What I Love Building
              </h3>
              <div className="grid gap-4">
                {PASSIONS.map((passion, index) => {
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-4 rounded-xl p-3 bg-gray-50/50 hover:bg-gray-200/50 dark:bg-gray-800/30 dark:hover:bg-gray-800/50 transition-all duration-300"
                    >
                      <div className="p-3 rounded-lg bg-white dark:bg-gray-700">
                        <passion.icon
                          size={20}
                          className="text-blue-500 dark:text-blue-400"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{passion.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {passion.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Digital Signature */}
            <motion.div variants={itemVariants} className="text-center py-8">
              <div className="text-sm text-gray-600 dark:text-gray-500 mb-4">
                Crafted with passion by{" "}
              </div>
              <div className="flex justify-center">
                <img src={SIGNATURE} alt="Fahad" className="w-30" />
              </div>
              <div className="text-lg tracking-widest font-light text-blue-500 dark:text-blue-400 mt-2">
                Fahad Khan
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
