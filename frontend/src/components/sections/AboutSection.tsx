import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { JOURNEY_STEPS, PASSIONS } from "../../utils/data";
import { useRef } from "react";

// import SIGNATURE from "../../assets/images/signature.png";
// import SIGNATURE2 from "../../assets/images/image.png";
import SIGNATURE3 from "../../assets/images/image copy.png";
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

  const timeLineVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const stepVariants: Variants = {
    hidden: { x: -70, opacity: 0 },
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

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Personal Story */}
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
                <img src={SIGNATURE3} alt="Fahad" className="w-38" />
              </div>
              <div className="text-xl tracking-widest font-light text-blue-500 dark:text-blue-400 mt-2">
                Fahad Khan
              </div>
            </motion.div>
          </motion.div>

          {/* developer journey timeline */}
          <motion.div
            ref={timeLineRef}
            initial="hidden"
            animate={timeLineInView ? "visible" : "hidden"}
            variants={timeLineVariants}
            className="relative"
          >
            <h3 className="text-2xl font-medium mb-8 text-center lg:text-left">
              My Developer Journey
            </h3>
            {/* timeline Line */}
            <div className="absolute w-px top-16 left-8 bottom-1 bg-gray-300 dark:bg-gray-700" />

            <div className="space-y-8">
              {JOURNEY_STEPS.map((step, index) => {
                return (
                  <motion.div
                    key={index}
                    variants={stepVariants}
                    whileHover={{ x: 4 }}
                    className="relative flex items-start space-x-6 group"
                  >
                    {/* timeline dot */}
                    <div
                      className={`relative z-10 flex flex-shrink-0 w-16 h-16 rounded-full ${step.color} items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon size={24} className="text-white" />
                    </div>

                    {/* content */}
                    <div className="flex-grow p-6 rounded-xl border tranition-all duration-300 bg-white/80 border-gray-200 group-hover:border-gray-300 group-hover:bg-white dark:bg-gray-800/50 dark:text-white dark:group-hover:bg-gray-800/70 dark:border-gray-700 dark:group-hover:border-gray-600 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-medium">{step.title}</h4>
                        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white ">
                          {step.year}
                        </span>
                      </div>
                      <div className="font-medium text-blue-600 dark:text-blue-400 mb-3">
                        {step.company}
                      </div>

                      <p className="font-light leading-relaxed text-gray-700 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center space-y-5"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Ready to bring your ideas to life?
            </p>
            <motion.button
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 1.08 }}
              className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-full uppercase tracking-wider font-medium transition-all duration-300"
            >
              Let's Work Together
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
