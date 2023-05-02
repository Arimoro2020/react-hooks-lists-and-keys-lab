import React from "react";

function ProjectItem({ project }) {
  const {name, about, technologies} = project;

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */
        technologies.map(technology=><span>technology</span>)}
      </div>
    </div>
  );
}

export default ProjectItem;
