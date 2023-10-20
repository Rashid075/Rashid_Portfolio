import React, { useState } from 'react';
import '../styling/Nav.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import {motion} from 'framer-motion'

export const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <motion.div className="navbar">
            <motion.a href="/" className='head'
            initial={{ opacity: 0, x: -100}}
            animate={{opacity: 1, x:0}}
            transition={{delay: 0.5, duration: 0.5}}>Portfolio</motion.a>
            <motion.ul className={click?'elements active':'elements'}
            initial={{ opacity: 0, x: 200}}
            animate={{opacity: 1, x:0}}
            transition={{delay: 0.5, duration: 0.5}}>
                <li><a href="#Hero" className='link'>Home</a></li>
                <li><a href="#About" className='link'>About</a></li>
                <li><a href="#Project" className='link'>Projects</a></li>
                <li><a href="#Contact" className='link'>Contact</a></li>
            </motion.ul>
            <div className="icons" onClick={handleClick}>
                {click ? <FaTimes size={20} onClick={handleClick} style={{color:'white'}}/> : <FaBars size={20} style={{color:'black'}} />}
            </div>
        </motion.div>
    );
}
