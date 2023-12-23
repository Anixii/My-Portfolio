import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { experiences } from '../../data/constants'; 
import './Experience.css'
import ExperienceCard from './ExperienceCard';
const Experience = () => {
    return (
        <div className="experience" id="experience">
            <div className="experience__wrapper">
                <div className="experience__title">Опыт</div>
                <div className="experience__desc">
                    Мой опыт работы в различных компаниях и проектах.
                </div>
                <div className="experience__timeline_section">
                    <Timeline>
                        {experiences.map((experience,index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </div>
            </div>
        </div>
    )
}

export default Experience