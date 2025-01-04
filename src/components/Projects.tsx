import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Project } from "../types";
import { projects } from "../userData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const project = projects;

  return (
    <section id="projects" className=""> 

        {/* Project Cards */}
        <div className="grid grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onOpenModal={setSelectedProject}
              index={index}
            />
          ))}
        </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
