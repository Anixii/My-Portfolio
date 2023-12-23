import './Education.css'
const EducationCard = ({ education }:any) => {
    return (
        <div className='education__card'>
            <div className='education__card_top'>
                <img className='education__card_img' src={education.img} />
                <div className='education__card_body'>
                    <div className='education__card_name'>{education.school}</div>
                    <div className='education__card_degree'>{education.degree}</div>
                    <div className='education__card_date'>{education.date}</div>
                </div>
            </div>
            <div className='education__card_grade'><b>Grade: </b>{education.grade}</div>
            <div className='education__card_desc'>
                <span className='education__card_span'>{education.desc}</span>
            </div>
        </div>
    )
}

export default EducationCard