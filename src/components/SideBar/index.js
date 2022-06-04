import{  NavLink } from 'react-router-dom';
import './index.scss';
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import{ faHome, faUser, faEnvelope,faEye } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () =>(
<div className="nav-bar">
 
    <nav>
    <NavLink exact="true" activeclassnam="active" to="/">
        <FontAwesomeIcon icon={faHome} color={"#4d4d4e"}/>
    </NavLink>
    <NavLink exact="true" activeclassnam="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color={"#4d4d4e"}/>
    </NavLink>
    <NavLink exact="true" activeclassnam="active" className="projects-link" to="/projects">
        <FontAwesomeIcon icon={faEye} color={"#4d4d4e"}/>
    </NavLink>
    <NavLink exact="true" activeclassnam="active" className="contact-link"to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color={"#4d4d4e"}/>
    </NavLink>
    </nav>
    <ul>
        <li>
           <a target="_blank"
            rel='noreferrer'
            href='https://www.linkedin.com/in/kedarrohit8329'
            >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
           </a>
        </li>

        <li>
           <a target="_blank"
            rel='noreferrer'
            href='https://github.com/rohit19102000/rohit19102000'
            >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
           </a>
        </li>
        
        <li>
           <a target="_blank"
            rel='noreferrer'
            href='https://instagram.com/kedar_rohit_1910?igshid=YmMyMTA2M2Y='
            >
                <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
           </a>
        </li>
    </ul>
</div> 
)
export default Sidebar 