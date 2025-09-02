import { useScroll, useTransform } from "framer-motion";
import PROFILE_IMG from "../../assets/images/profile.webp";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { type Variants } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { ArrowDown, Mail } from "lucide-react";

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen transition-all duration-500 bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
      {/* hero section */}
      <motion.section
        id="home"
        style={{ y: scrollY }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-8"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl  opacity-15 bg-blue-800 dark:bg-blue-500"
          />

          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl  opacity-15 bg-purple-800 dark:bg-purple-500"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 mt-10">
          {/* mobile layout centered */}
          <div className="block lg:hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              {/* profile image - mobile */}
              <motion.div variants={imageVariants} className="mb-5">
                <div className="w-32 h-32 mx-auto relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-32 rounded-2xl overflow-hidden border-4 border-gray-300 dark:border-gray-800 shadow-2xl"
                  >
                    <img
                      src={PROFILE_IMG}
                      alt="Profile image"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* decorative rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-2 rounded-2xl border border-blue-500/20"
                  />
                </div>
              </motion.div>

              {/* Content - Mobile */}
              <motion.div
                variants={textVariants}
                className="uppercase tracking-widest text-gray-600 dark:text-gray-500 mb-4"
              >
                Full Stack Developer
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-5xl font-light mb-4 leading-tight"
              >
                <span className="text-gray-900 dark:text-white">
                  Building digital
                </span>
                <span className="text-blue-500 dark:text-blue-400 font-medium">
                  {" "}
                  experiences
                </span>
                <span className="text-gray-600 dark:text-white">
                  {" "}
                  that matter
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto font-light leading-relaxed"
              >
                I craft beautiful, functionaly web applications with modern
                technologies and thoughtful user experiences.
              </motion.p>

              {/* CTA button - mobile */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row mb-8 gap-4 items-center justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  View Work
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className="border border-gray-300 hover:border-gray-400 text-gray-700 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-300 px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  Get in Touch
                </motion.button>
              </motion.div>

              {/* social links - mobile */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center space-x-4 mb-8"
              >
                {[
                  { icon: FiGithub, href: "#" },
                  { icon: FiLinkedin, href: "#" },
                  { icon: Mail, href: "#" },
                ].map((social, index) => {
                  return (
                    <motion.a
                      href={social.href}
                      key={index}
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="p-3 rounded-full transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
                    >
                      <social.icon size={20} />
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* tect stack - mobile */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center items-center space-x-2 tracking-widest uppercase text-sm"
              >
                {["React", "Next.js", "Node.js", "TypeScript", "MongoDB"].map(
                  (item, index) => {
                    return (
                      <>
                        <span className="text-gray-500 dark:text-gray-600">
                          {item}
                        </span>
                        {index != 4 && (
                          <span className="text-gray-400 dark:text-gray-700">
                            ⏐
                          </span>
                        )}
                      </>
                    );
                  }
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeIn" }}
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 "
        >
          <ArrowDown size={20} className="text-gray-400 dark:text-gray-500" />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
