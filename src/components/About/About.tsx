// import HeroBgAnimation from '../HeroBgAnimation'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import  './About.css' 
import AnimatedBack from '../AnimatedBack/AnimatedBack'
import { Link } from 'react-router-dom';
const HeroSection = () => {
    return (
        <div id="about">
            <div className='about'>
                <div className='about__bg'>
                    <AnimatedBack/>
                </div>
                <div className='about__inner_container' >
                    <div className='about__text' id="Left">
                        <div className='about__name'>Hi, I am <br /> {Bio.name}</div>
                        <div className='about__textloop'>
                            I am a
                            <span className='about__textloop_span'>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </div>
                        <div className='about__subtitle'>{Bio.description}</div>
                        <Link className='about__resume' to={Bio.resume} target='display'>Check Resume</Link>
                    </div>

                    <div className='about__image' id="Right">

                        {/* <Img src='jj' /> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection