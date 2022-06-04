import'./index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react'
const Projects  = () =>{
  const heading = ['M','y',' ','W','o','r','k' ]
  const  [letterClass,setLetterClass] = useState('text-animate');
  useEffect(()=> {    
    setTimeout(() =>{
        return  setLetterClass('text-animate-hover');
    },3000)
},[])
    return (
        <>
        <div className="project-container ">
      
        <h1>
                <AnimatedLetters
               letterClass={letterClass}
                strArray={heading}
                idx={15}
                />
            
            </h1>
            
        <div className="main-container delay">

 <div class="card">
    <div class="imgBx a">
 
    </div>
    <div class="content">
      <h2>Movie app</h2>
      <p>React</p>
    </div>
  </div>
  <div class="card">
    <div class="imgBx b">
   
    </div>
    <div class="content">
      <h2>Weather app</h2>
      <p>weather api</p>
    </div>
  </div>
  <div class="card">
    <div class="imgBx c">
    
    </div>
    <div class="content">
      <h2>eye Browes animation</h2>
      <p>animation on mouse move</p>
    </div>
  </div>

            </div>
         </div>

<Loader type="pacman"/>
        </>

    )
}
export default Projects;