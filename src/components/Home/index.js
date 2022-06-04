import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLettrs from '../AnimatedLetters'
import './index.scss';
import Image from './Logo'; 
import   './index.scss';
const Home = () => {
    const  [letterClass,setLetterClass] = useState('text-animate');
    const nameArray = ['R','o','h','i','t']
    const jobArray = ['F','r','o','n','t',' ','E ','n','d',' ','D','e','v','e','l','o','p','e','r','.']
    useEffect(() =>{
         setTimeout(() =>{
            return setLetterClass('text-animate-hover');
        },4000)
    },[])
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass} >H</span>
                <span className={`${letterClass} _12`} >i</span>
                <br />
                <span className={`${letterClass} _13`} >I</span>
                <span className={`${letterClass} _14`}  style={{color: '#c5ea45'}}>'m&nbsp;</span>
                <AnimatedLettrs letterClass={letterClass} 
                strArray={nameArray}
                idx={15}
                />
            <br />
                
                <AnimatedLettrs letterClass={letterClass} 
                strArray={jobArray}
                idx={20}
                />
                </h1>
             
                <h2> Frontend Developer/ Student </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Image/>
        </div>
    )
}
export default Home;
