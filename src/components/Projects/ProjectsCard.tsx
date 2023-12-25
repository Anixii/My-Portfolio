import { ProjectsCardItemType } from '../../data'
import './Projects.css' 
type ProjectType = { 
    setOpenModal: any, 
    project: ProjectsCardItemType, 
    openModal: { state: boolean, project: any }
}
const ProjectCards = ({project,setOpenModal}:ProjectType) => {
    return (
        <div className="projects__card" onClick={() => setOpenModal({state: true, project: project})}>
            <img className="projects__card_img" src={project.image}/>
            <div className="projects__card_tags">
                {project.tags?.map((tag, index) => (
                <span className="projects__card_tag" key={index}>{tag}</span>
                ))}
            </div>
            <div className="projects__card_details">
                <div className="projects__card_title">{project.title}</div>
                <div className="projects__card_date">{project.date}</div>
                <div className="projects__card_desc">{project.description}</div>
            </div>
            {/* <div className="projects__card_members">
                {project.member?.map((member,index) => (
                    <img className="projects__card_avatar" key={index} src={member.img}/>
                ))}
            </div> */}
            {/* <Button>View Project</Button> */}
        </div>
    )
}

export default ProjectCards