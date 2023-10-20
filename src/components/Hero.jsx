import React from 'react'
import { FaFileDownload, FaLinkedin,FaGithub,FaInstagram,FaWhatsapp } from 'react-icons/fa';
import profile from'../assets/image.jpg';
import {motion} from 'framer-motion'
import '../styling/Hero.css';
import Resume from '../assets/resume.pdf'
export const Hero = () => {
  return (
    <motion.div className='heroo'
    initial={{opacity: 0, x: -200}}
    animate={{opacity: 1, x:0}}
    transition={{delay: 0.5, duration: 0.5}} id='Hero'>
      <div className='text'>
        <h2 className='header'>Hi, I'm Rashid</h2>
        <p className='para'>I am a passionate web developer dedicated to crafting innovative solutions and bringing ideas to life through code.</p>
      </div>
      <div className="btn">
        <button className='contact'>Contact</button>
        <a href={Resume} download><button className='download'>Download CV <FaFileDownload /></button></a>
      </div>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/shaik-rashid-9b6282238/" className='social-links'><FaLinkedin/></a>
        <a href="https://github.com/Rashid075" className='social-links'><FaGithub/></a>
        <a href="https://www.instagram.com/_m_u_n_n_a_075/?next=%2F" className='social-links'><FaInstagram/></a>
        <a href="/" className='social-links'><FaWhatsapp/></a>
      </div>
      <motion.div className="images"
      initial={{opacity: 0, x: 200}}
      animate={{opacity: 1, x:0}}
      transition={{delay: 0.5, duration: 0.5}}>
        <img src={profile} alt="" />
      </motion.div>
    </motion.div>
  )
}
