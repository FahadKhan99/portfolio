import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

import { AnimatePresence, motion } from "framer-motion";
import {
  Code2,
  Hamburger,
  HamburgerIcon,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };
  return (
    <motion.nav
      style={{ opacity: 1 }}
      className="fixed top-0 w-full z-50 px-6 py-4 bg-gray-50/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 dark:text-white text-black"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="flex items-center space-x-2"
        >
          <Code2 className="text-blue-500" />
          <span className="text-lg ml-1">Fahad Khan</span>
        </motion.div>

        {/* desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Skills", "Work", "About", "Contact"].map((item) => {
            return (
              <motion.button
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                whileHover={{ x: 4, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="uppercase tracking-wider transition-colors text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white "
              >
                {item}
              </motion.button>
            );
          })}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleTheme()}
            className="p-2 rounded-full transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-800"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>
        {/* mobile menu button */}
        <div className="flex md:hidden items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleTheme()}
            className="p-2 rounded-full transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-800"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-800"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="md:hidden mt-4 p-4 rounded-lg dark:bg-gray-900 bg-white border border-gray-200 dark:border-gray-800"
          >
            {["Home", "Skills", "Work", "About", "Contact"].map((item) => {
              return (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  whileHover={{ x: 4, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 uppercase tracking-wider transition-colors text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white "
                >
                  {item}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
