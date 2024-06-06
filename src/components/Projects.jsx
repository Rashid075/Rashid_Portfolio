import React from 'react';
import '../styling/Project.css';
import Food from '../assets/order.jpg';
import Botts from '../assets/Botts.jpg'
import Idea from '../assets/sharing.jpg';
import Vote from '../assets/online.jpg';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Projects = () => {
    return (
        <div className='project-section' id="Project">
            <motion.h1 className='header'>My <span>Projects</span></motion.h1>
            <div className='project-container'>
                <motion.div className='project-card'>
                    <img src={Food} alt="Food Delivery App" className='project-image' />
                    <div className='project-info'>
                        <h4>GoFood</h4>
                        <p>A web application for ordering food online. Users can browse menus, place orders. This app is built with a focus on user friendly design and efficient functionality.</p>
                        <a href="https://github.com/Rashid075/Food_Delivery" className='icon-link'>
                            <FaGithub className='icon' />
                        </a>
                    </div>
                </motion.div>
                <motion.div className='project-card'>
                    <img src={Botts} alt="HelperBot" className='project-image' />
                    <div className='project-info'>
                        <h4>HelperBot</h4>
                        <p>A mobile application that uses ChatGPT API to respond to user queries and the DALL-E API to generate images based on user input.</p>
                        <a href="https://github.com/Rashid075/React_Native" className='icon-link'>
                            <FaGithub className='icon' />
                        </a>
                    </div>
                </motion.div>
                <motion.div className='project-card'>
                    <img src={Vote} alt="Digital-Ballot" className='project-image' />
                    <div className='project-info'>
                        <h4>Digital-Ballot</h4>
                        <p>A web application which allows the eligible users to cast their votes remotely through an initiative and user-friendly interface.</p>
                        <a href="https://github.com/Rashid075/Digital-Ballot" className='icon-link'>
                            <FaGithub className='icon' />
                        </a>
                    </div>
                </motion.div>
                <motion.div className='project-card'>
                    <img src={Idea} alt="IdeaFusion" className='project-image' />
                    <div className='project-info'>
                        <h4>Idea-Fusion</h4>
                        <p>A platform where you can share your innovative ideas, collaborate with like-minded people and bring your visions to life.</p>
                        <a href="https://github.com/Rashid075/Idea_Fusion" className='icon-link'>
                            <FaGithub className='icon' />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
