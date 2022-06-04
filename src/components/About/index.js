import { useState, useEffect } from 'react';
import { 
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact
} from '@fortawesome/free-brands-svg-icons';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';
import './index.scss';

const About = () => {
    const  [letterClass,setLetterClass] = useState('text-animate');
    useEffect(()=> {    
        setTimeout(() =>{
            return  setLetterClass('text-animate-hover');
        },3000)
    },[])

    return (
    <>
    <div className="container About-page">
            <div className="text-zone">
            <h1>
                <AnimatedLetters
               letterClass={letterClass}
                strArray={['A','b','o','u','t', ' ','M','e']}
                idx={15}
                />
            
            </h1>
                
            <p>I am seeking an Internship as a Frontend Developer
                to enhance and explore the knowledge I gained
                through learning and building various projects.
            </p>

            <p>Throughout my projects, I have demonstrated my
                Understanding of Javascript, React.Js, and various
                other technologies, I have been passionate about
                learning and implementing new technologies and I
                wish to develop an understanding of how to
                translate business requirements into technology to
                get logical solutions
            </p>
                
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore repudiandae nisi sectetur, adipisicing elit. Itaque, dele Lorem ipsum dolor sit ametctus?</p>
            </div>
            
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color='#f06529'/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
    </>
    )
} 
export default About