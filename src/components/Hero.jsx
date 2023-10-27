import React from 'react'
import { FaFileDownload, FaLinkedin,FaGithub,FaInstagram,FaWhatsapp } from 'react-icons/fa';
import profile from'../assets/image.jpg';
import {motion} from 'framer-motion'
import { useTypewriter } from 'react-simple-typewriter';
import '../styling/Hero.css';
import Resume from '../assets/resume.pdf'
export const Hero = () => {
  const [typeEffect]=useTypewriter({
    words:["Hi, I'm a Web Developer"],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 50
  })
  return (
    <motion.div className='heroo' id='Hero'>
      <div className='text'>
        <h2 className='header'><span>{typeEffect}</span></h2>
        <p className='para'>I am a passionate web developer dedicated to crafting innovative solutions and bringing ideas to life through code.</p>
      </div>
      <div className="btn">
        <a href="#Contact"><button className='contact'>Contact</button></a>
        <a href={Resume} download><button className='download'>Download CV <FaFileDownload /></button></a>
      </div>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/shaik-rashid-9b6282238/" className='social-links'><FaLinkedin/></a>
        <a href="https://github.com/Rashid075" className='social-links'><FaGithub/></a>
        <a href="https://www.instagram.com/_m_u_n_n_a_075/?next=%2F" className='social-links'><FaInstagram/></a>
        <a href="/" className='social-links'><FaWhatsapp/></a>
      </div>
      <motion.div className="images">
        <img src={profile} alt="" />
      </motion.div>
    </motion.div>
  )
}
