import { useFetchProjects } from './fetchProjects'

const Projects = () => {
  const { loading, projects } = useFetchProjects()
  console.log(projects)
  return <h2>Projects</h2>
}
export default Projects
