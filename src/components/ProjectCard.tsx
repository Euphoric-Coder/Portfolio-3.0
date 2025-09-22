import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenModal,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        onClick={() => onOpenModal(project)}
        className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-xl overflow-hidden cursor-pointer border border-gray-700 hover:border-gray-500 shadow-lg hover:shadow-gray-500/50 transition-all duration-500"
      >
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:brightness-75 transition-all duration-300"
          />

          {/* Action Buttons */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
            <div className="flex gap-4 mb-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-500/20 rounded-full backdrop-blur-md hover:bg-purple-500/30 transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-6 h-6 text-purple-300 hover:text-purple-500" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-pink-500/20 rounded-full backdrop-blur-md hover:bg-pink-500/30 transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-6 h-6 text-pink-300 hover:text-pink-400" />
              </motion.a>
              {/* <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-500/20 rounded-full backdrop-blur-md hover:bg-blue-500/30 transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <Video className="w-6 h-6 text-blue-300 hover:text-blue-500" />
              </motion.a> */}
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-600 text-transparent bg-clip-text">
            {project.title}
            {project.live && (
              <span className="ml-2 text-red-400 text-xs bg-red-500/20 py-1 px-3 rounded-full animate-pulse inline-flex items-center gap-1">
                Live{" "}
                <span className="bg-red-400 w-2 h-2 rounded-full inline-block"></span>
              </span>
            )}
          </h3>

          {/* Description */}
          <p className="text-gray-400 mb-4 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tagIndex}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-gray-900/70 text-gray-300 rounded-full text-sm hover:bg-gray-700 hover:shadow-md hover:shadow-gray-500/50 transition"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
