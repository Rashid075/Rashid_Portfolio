import React from 'react'
import '../styling/footer.css'
import {motion} from 'framer-motion'
export const Footer = () => {
    return (
        <div>
            <motion.footer className='Footer'
             initial={{ opacity: 0 }}
             animate={{opacity: 1}}
             transition={{delay: 0.5, duration: 0.5}}>
                <ul className='footer-elements'>
                    <li><a href="/" className='footer-links'>Home</a></li>
                    <li><a href="/" className='footer-links'>About</a></li>
                    <li><a href="/" className='footer-links'>Projects</a></li>
                    <li><a href="/" className='footer-links'>Contact</a></li>
                </ul>
            </motion.footer>
        </div>
    )
}
