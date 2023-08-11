import { ProjectListProps } from "../types";

function ProjectList(props: ProjectListProps) {
  return (
    <div className="projects-main">
      <h1
        style={{
          fontStyle: "italic",
        }}
      >
        PROJECTS
      </h1>
      {props.list.map((project) => {
        return (
          <div className="project-card" key={project.id}>
            <div
              className="pc-detail-btn"
              onClick={() => props.projectClick(project.id)}
            ></div>
            <h3 className="pc-title">{project.title}</h3>
            <p className="pc-desc">{project.description}</p>
            <p className="pc-link">
              <a href={project.link} target="blank">View Code</a>
            </p>
            <div
              className="pc-img"
              style={{
                backgroundImage: `url(${project.imgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: "50%",
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectList;
