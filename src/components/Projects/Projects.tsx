import { projects } from "../../data/constants"
import './Projects.css' 
import ProjectCards from "./ProjectsCard"
type ProjectType = { 
    openModal: { state: boolean, project: any }, 
    setOpenModal: any
}
const Projects = ({openModal,setOpenModal}:ProjectType) => {
    return (
      <div className="projects" id="projects">
        <div className="projects__wrapper">
          <div className="projects__title">Проекты</div>
          <div className="projects__desc">
            Все мои проекты, за мою Frontend карьеру
          </div>
  
          <div className="projects__container">
            {projects
              .map((project,index) => (
                <ProjectCards key={index} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
              ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default Projects