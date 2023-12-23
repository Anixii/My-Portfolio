import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education, experiences } from '../../data/constants'; 
import './Education.css'
import EducationCard from './EducationCard';
const Education = () => {
    return (
        <div className='education' id="education">
            <div className='education__wrapper'>
                <div className='education__title'>Образование</div>
                <div className='education__desc'>
                Мое образование было путешествием самопознания. Подробности моего образования следующие.
                </div>
                <div className='education__timeline' >
                    <Timeline>
                        {education.map((education,index) => (
                            <TimelineItem key={index} >
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={education}/>
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length  && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </div>
            </div>
        </div>
    )
}

export default Education