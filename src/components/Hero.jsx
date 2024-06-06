import React from 'react';
import { FaFileDownload, FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';
import '../styling/Hero.css';
import Resume from '../assets/Shaik Resume.pdf';
import Profile from '../assets/profile.png';

export const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: ["Hi, I'm a Web Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <motion.div className='heroo' id='Hero'>
      <div className='text'>
        <h2 className='header'><span>{typeEffect}</span></h2>
        <p className='para'>I am a passionate web developer dedicated to crafting innovative solutions and bringing ideas to life through code.</p>
      </div>
      <div className="btn">
        <a href="#Contact" className='contact'>Contact</a>
        <a href={Resume} download className='download'>Download CV <FaFileDownload /></a>
      </div>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/shaik-rashid/" className='social-links'><FaLinkedin size={20} /></a>
        <a href="https://github.com/Rashid075" className='social-links'><FaGithub size={20} /></a>
        <a href="https://www.instagram.com/_m_u_n_n_a_075/?next=%2F" className='social-links'><FaInstagram  size={20}/></a>
        <a href="/" className='social-links'><FaWhatsapp size={20} /></a>
      </div>
      <motion.div className="images">
        <img src={Profile} alt="" />
      </motion.div>
    </motion.div>
  );
};
