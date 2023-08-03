export interface ProjectObject {
  id: number,
  title: string,
  description: string,
  imgSrc: string,
  link: string
}

export interface ProjectListProps {
  list: Array<ProjectObject>,
  projectClick: (id: number) => void
}

export interface ProjectDetailsProps {
  project: ProjectObject,
  back: () => void
}