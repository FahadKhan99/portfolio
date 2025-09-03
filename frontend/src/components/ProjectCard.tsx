import { motion, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  category: string;
};

interface Props {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: Props) => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      className="group relative"
    >
      <div className="rounded-2xl overflow-hidden border transition-all duration-500 dark:bg-gray-900/50 dark:border-gray-800 dark:hover:border-gray-700 dark:hover:shadow-2xl dark:hover:shadow-blue-500/10 bg-while/80 border-gray-200 hover:border-gray-300 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                Featured
              </span>
            </div>
          )}

          {/* category badge */}
          <div className="absolute top-4 right-4">
            <span className="text-xs px-3 py-1 rounded-full font-medium bg-white/80 text-gray-700 dark:bg-gray-800/80 dark:text-gray-300">
              {project.category}
            </span>
          </div>

          {/* hover overlay with CTA buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center space-x-3"
          >
            <motion.a
              href={project.liveUrl}
              initial={{ y: 20, opacity: 0.5 }}
              whileHover={{ y: 0, opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center justify-center space-x-2 text-sm font-medium transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </motion.a>
            <motion.a
              href={project.githubUrl}
              initial={{ y: 20, opacity: 0.5 }}
              whileHover={{ y: 0, opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2 font-medium transition-all duration-300"
            >
              <FiGithub size={16} />
              <span>GitHub</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Project content */}
        <div className="p-6">
          <h3 className="text-xl font-medium mb-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed mb-4 text-gray-600 dark:text-gray-400">
            {project.description}
          </p>

          {/* tech stack used */}
          <div className="flex items-center flex-wrap gap-2">
            {project.tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
