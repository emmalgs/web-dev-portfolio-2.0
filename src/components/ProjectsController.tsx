import { useState } from 'react';
import { ProjectObject } from '../types';
import Header from './Header';
import ProjectDetails from "./ProjectDetails";
import ProjectList from "./ProjectList";
import allProjects from "../assets/store/projectData";

function ProjectController() {
  const [selectedProject, setSelectedProject] = useState<ProjectObject | null>(null);

  const handleProjectClick = (id: number) => {
    const selection: ProjectObject = allProjects.filter(project => project.id === id)[0]
    console.log(selection)
    setSelectedProject(selection);
  }

  const handleBackClick = () => {
    setSelectedProject(null);
  }

  let currentlyVisible = null;
  if (selectedProject !== null) {
    currentlyVisible = 
      <ProjectDetails project={selectedProject} back={handleBackClick} />
  } else {
    currentlyVisible =
      <ProjectList list={allProjects} projectClick={handleProjectClick} />
  }

return (
  <div>
    <Header />
    {currentlyVisible}
  </div>
  )
}

export default ProjectController