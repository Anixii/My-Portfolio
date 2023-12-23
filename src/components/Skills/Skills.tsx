import { skills } from '../../data/constants'
import './Skills.css'
const Skills = () => {
    return (
      <div className="skills" id="skills">
        <div className='skills__wrapper'>
          <div className='skills__title'>Навыки</div>
          <div className='skills__desc'>Вот некоторые из моих навыков, которые я приобрел за последние 2 года.
          </div>
          <div className='skills__container'>
            {skills.map((skill,index) => (
              <div className='skills__item' key={index}>
                <h2 className='skills__subtilte'>{skill.title}</h2>
                <div className='skills__list'>
                  {skill.skills.map((item,index) => (
                    <div className='skills__list_item' key={index}>
                      <img className='skill__img' src={item.image}/>
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
  
          </div>
        </div>
      </div>
    )
  }
  
  export default Skills