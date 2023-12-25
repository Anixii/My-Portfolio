import { CloseRounded} from '@mui/icons-material';
import { Modal } from '@mui/material';
import { Link } from 'react-router-dom'; 
import './Projects.css' 
type ProjectDetailsType = { 
    openModal:{ state: boolean, project: any },
    setOpenModal: any
}
const ProjectDetails = ({ openModal, setOpenModal }:ProjectDetailsType) => {
    const project = openModal?.project;
    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <div className='modal'>
                <div className='modal__wrapper'>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <img className='modal__img' src={project?.image} />
                    <div className='modal__title'>{project?.title}</div>
                    <div className='modal__date'>{project.date}</div>
                    <div className='modal__tags'>
                        {project?.tags.map((tag: Array<string>,index:number) => (
                            <div className='modal__tag' key={index}>{tag}</div>
                        ))}
                    </div>
                    <div className='modal__desc'>{project?.description}</div>
                    <div className='modal__btn_group'>
                        {project?.github && <Link className='modal__btn_github' to={project?.github} target='new'>Посмотреть код</Link>}
                        <Link className='modal__btn_site' to={project?.webapp} target='new'>Посмотреть сайт</Link>
                    </div>
                </div>
            </div>

        </Modal>
    )
}

export default ProjectDetails