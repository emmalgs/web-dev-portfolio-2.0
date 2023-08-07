import { ProjectDetailsProps } from "../types";

function ProjectDetails(props: ProjectDetailsProps) {
  return (
    <div className="project-details-main">
      <div className="pd-back-btn" onClick={props.back}></div>
      <h1 className="pd-title">{props.project.title}</h1>
      <div
        className="project-image-detail"
        style={{
          backgroundImage: `url(${props.project.imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <p className="pd-desc">{props.project.description}</p>
      <p className="pd-link">
        <a href={props.project.link}>Link to Project</a>
      </p>
    </div>
  );
}

export default ProjectDetails;
