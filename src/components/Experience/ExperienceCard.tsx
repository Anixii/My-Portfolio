import { FC } from "react"
import { ExperienceCardItemType } from "../../data"
type ExperienceCardPropsType = { 
    experience: ExperienceCardItemType
}
const ExperienceCard:FC<ExperienceCardPropsType> = ({ experience }:ExperienceCardPropsType) => {
    return (
        <div className="experience__card">
            <div className='experience__card_top'>
                <img className="experience__card_img" src={experience.img} />
                <div className="experience__card_body">
                    <div className="experience__card_role">{experience.role}</div>
                    <div className="experience__card_company">{experience.company}</div>
                    <div className="experience__card_date">{experience.date}</div>
                </div>
            </div>
            <div className="experience__card_description">
                {experience?.desc &&
                    <span className="experience__card_span">{experience?.desc}</span>

                }
                {experience?.skills &&
                    <>
                        <br />
                        <div className="experience__card_skills">
                            <b>Skills:</b>
                            <div className="experience__card_item">
                                {experience?.skills?.map((skill, index:number) => (
                                    <div className="experience__card_skill_item" key={index}>• {skill}</div>
                                ))}
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default ExperienceCard