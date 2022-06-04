import './index.scss';
import Img from '../../../assets/images/img.png';
import { useEffect, useRef } from 'react'
import Loader from 'react-loaders'
import gsap from 'gsap-trial';  
const Image =() => {

  const bgRef = useRef();
    const solidLogoRef = useRef();
    
    useEffect(() => {

    gsap
    .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      
      })
      gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
        x: 200,
        scale:0.8,
      },
      {
        x:0, 
        opacity: 1,
        scale:1,
        delay: 4,
        duration: 1,
      }
      )
    }, [])
    
    return(
      <>
      
         <div className="img-container"  ref={bgRef }>
    
        <img ref={solidLogoRef} className="solid-img"  src={Img} alt="javascript,develoer"/>
   
    </div> 
    <Loader  type="pacman"/>
    </>
)
}
export default Image