import React from 'react'
import '../styling/About.css'
import { FaFileDownload } from 'react-icons/fa';
import {motion} from 'framer-motion'
import Resume from '../assets/resume.pdf'
export const About = () => {
    return (
        <div id='About'>
            <motion.h1 className='heading'
             initial={{ opacity: 0 }}
             animate={{opacity: 1}}
             transition={{delay: 0.5, duration: 0.5}}>About Me</motion.h1>
            <div className='about'>
                <motion.div className="myself"
                 initial={{ opacity: 0, x: -100}}
                 animate={{opacity: 1, x:0}}
                 transition={{delay: 0.5, duration: 0.5}}>
                    <h2>My Introduction</h2>
                    <p>Hello,I am Shaik Rashid,and I am a skilled web developer with a passion for creating dynamic and user-friendly websites. My portfolio showcases my expertise in crafting engaging online experiences through coding and design.</p>
                    <a href={Resume} download><button className='download'>Download CV  <FaFileDownload /></button></a>
                </motion.div>
                <motion.div className="myself1"
                 initial={{ opacity: 0, x: 200}}
                 animate={{opacity: 1, x:0}}
                 transition={{delay: 0.5, duration: 0.5}}>
                    <h2>My Skills</h2>
                    <div className="cont">
                        <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>ReactJS</span> <span>Node</span> <span>Express</span> <span>Mongo DB</span> <span>Django</span> <span>React Native</span> <span>Python</span> <span>C++</span> <span>Bootstrap</span> <span>C Programming</span> <span>Web Development</span>
                    </div>
                </motion.div>
            </div>
        </div>

    )
}
