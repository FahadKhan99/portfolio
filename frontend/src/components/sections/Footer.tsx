import { useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SOCIAL_LINKS } from "../../utils/data";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../utils/helper";
import { ArrowUp, Code2, Heart } from "lucide-react";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50%" });

  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // animated gradient line component
  const AnimatedGradientLine = () => {
    return (
      <div className="absolute top-0 left-0 w-full h-px overflow-hidden">
        <motion.div
          initial={{ width: "0%", opacity: 0 }}
          animate={isInView ? { width: "100%", opacity: 1 } : "hidden"}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent dark:from-transparent dark:via-blue-500 dark:to-transparent"
        />
        <motion.div
          animate={{
            x: ["-50%", "calc(100vw + 50%)"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "mirror",
              duration: 6,
              ease: "linear",
              delay: 2,
            },
          }}
          className="absolute top-0 h-px w-32 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 dark:from-blue-400 dark:via-purple-500 dark:to-blue-400 blur-sm"
        />
      </div>
    );
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-white text-gray-900 dark:bg-gray-900 dark:text-white overflow-hidden"
    >
      {/* animated wave / gradient line */}
      <AnimatedGradientLine />

      {/* background element */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute bottom-10 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5 bg-blue-400 dark:bg-blue-500" />

        <div className="absolute top-10 right-1/3 w-48 h-48 rounded-full blur-3xl  opacity-5 bg-purple-400 dark:bg-purple-500" />
      </motion.div>

      <div className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center space-y-8"
          >
            {/* logo brand */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="inline-flex items-center space-x-2 text-2xl font-medium"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-blue-500 dark:text-blue-400"
                >
                  <Code2 size={28} />
                </motion.div>
                <span>Fahad Khan</span>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="max-w-md mx-auto text-gray-600 dark:text-gray-400"
              >
                Crafting digital experiences with passion, precision, and a
                touch of magic.
              </motion.p>
            </motion.div>

            {/* social links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-6"
            >
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2, rotate: [0, -5, 5, 0] }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { y: 0, opacity: 1 } : "hidden"}
                  transition={{
                    delay: index * 0.1 + 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className={`p-3 rounded-full transition-all duration-200 bg-gray-100/50 hover:bg-gray-200/50 dark:bg-gray-800/50 dark:hover:gray-700/50 backdrop-blur-sm ${social.color}`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* divider */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center space-x-4"
            >
              <motion.div
                animate={{ x: [-20, 0, -20] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-px w-16 bg-gray-300 dark:bg-gray-700"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="text-red-500"
              >
                <Heart size={16} fill="currentColor" />
              </motion.div>
              <motion.div
                animate={{ x: [20, 0, 20] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-px w-16 bg-gray-300 dark:bg-gray-700"
              />
            </motion.div>

            {/* Copyright  */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-500">
                © {new Date().getFullYear()} Fahad Khan. All rights reserved.
              </p>
              <p className="text-xs text-gray-700 dark:text-gray-600">
                Build with React & Framer Motion &#8729; Designed with care
              </p>
            </motion.div>

            {/* back to top button */}
            <motion.div variants={itemVariants}>
              <motion.button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-100 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white backdrop-blur-sm border dark:border-gray-700 border-gray-300"
                whileHover={{
                  y: -2,
                  scale: 1.05,
                  boxShadow: "10px 10px 10px rgba(59, 130, 246, 0.15)",
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <ArrowUp size={16} />
                <span>Back to Top</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
