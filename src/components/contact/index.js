import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser'
const Contact = () => {
    const  [letterClass,setLetterClass] = useState('text-animate');
    const refForm = useRef()
    useEffect(()=> {    
        setTimeout(() =>{
            return  setLetterClass('text-animate-hover');
        },3000)
    },[])
    const sendEmail = (e) =>{
        e.preventDefault()
        emailjs
        .sendForm(
            'service_7h9whca',
            'template_2g7krkp',
            refForm.current,
            'user_LkhBP58TYmdbuiORTJBVJ' 
        )
        .then(
            ()=>{
                alert('Message sucessfully sent!')
                window.location.reload(false)
            },
            () => { 
                alert('Failed to send  the message,try again')
            }
        )
    }
    return (
        <>
        <div className="container contact-page"> 
            <div className="text-zone">
                 <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','M','e',]} 
                    idx={15}
                    />
                 </h1>
                 <p>
                 I certainly believe this project might be able to give an insight of my understanding,
                    However you may also
                    Fill up the form below to get in touch.
                 </p>
                 <div className="contact-form">
                     <form ref={refForm} onSubmit={sendEmail}> 
                         <ul>
                             <li className="half">
                                 <input type="text" name="user-name" placeholder="Name" required />
                             </li>
                             <li className="half">
                             <input 
                                placeholder="Email" 
                                type="email" 
                                name="user-Email" 
                                required
                             />
                             </li>
                             <li>
                             <input 
                             type="text"
                                name="User-Subject"
                                placeholder="Subject"
                                required
                            />
                             </li>
                             <li>
                                 <textarea 
                                 placeholder="Message" 
                                 name="message" 
                                 required>
                                </textarea> 
                             </li>
                             <li>
                                 <input type="submit" className='flat-button' value="SEND" />
                             </li>
                         </ul>
                     </form>
                 </div>
            </div>
             <div className="info-wrap">
            <div className="info">
                Rohit Kedar
                <br/>
                India,  
                <br/>
                Ulhasnager,
                <br/>
                Maharashtra
                    <br/>
                rohitKedar2000@gmail.com
            </div>
        </div> 
        <Loader type='pacman'/>
        </div>
        </>
    )
}
export default Contact;