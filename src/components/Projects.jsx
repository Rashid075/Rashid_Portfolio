import React from 'react'
import '../styling/Project.css'
import Scholar from '../assets/logo.jpg'
import Food from '../assets/food.png'
import Rent from '../assets/rental.png'
import {FaGithub } from 'react-icons/fa';
import {motion} from 'framer-motion'
export const Projects = () => {
    return (
        <div id='Project'>
            <motion.h1 className='headers'initial={{ opacity: 0 }}
                animate={{opacity: 1}}
                transition={{delay: 0.5, duration: 0.5}}>Projects</motion.h1>
            <div className='containers'>
                <motion.div className="container"
                initial={{ opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.5, duration: 0.5}}>
                    <img src={Scholar} alt="Scholarship" className='project-image' />
                    <h4>Scholarship Portal</h4>
                    <p>This is a portal where students can able to spply for the scholarships in a single application. Where students also have Eligibility criteria.This is a single web page application.</p>
                    <button className='btn-link'> <FaGithub className='icon'/>GitHub Link </button>
                </motion.div>
                <motion.div className="container"
                initial={{ opacity: 0 }}
                animate={{opacity: 1}}
                transition={{delay: 0.5, duration: 0.5}}>
                    <img src={Food} alt="Food_Delivery" className='project-image' />
                    <h4>Food Delivery App</h4>
                    <p>This is a Website where we can oder food online at any time any where with less cost. Our partners are best because they make the delicious foods. This is a amazing website where you can enjoy your food.</p>
                    <button className='btn-link'><FaGithub className='icon'/>GitHub Link</button>
                </motion.div>
                <motion.div className="container"
                initial={{ opacity: 0}}
                animate={{opacity: 1 }}
                transition={{delay: 0.5, duration: 0.5}}>
                    <img src={Rent} alt="Farmer_Rental" className='project-image' />
                    <h4>Farmer Rental System</h4>
                    <p>This is a website for the farmers where the farmers can rent any items and tools very easily from the borrower that are necessary for the farming. This is a very useful for the farmers who cant buy the equipments.</p>
                    <button className='btn-link'><FaGithub className='icon'/>GitHub Link</button>
                </motion.div>
            </div>
        </div>
    )
}
