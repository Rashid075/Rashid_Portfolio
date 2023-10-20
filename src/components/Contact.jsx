import React from 'react'
import { FaMailBulk, FaPhone } from 'react-icons/fa'
import '../styling/Contact.css'
import {motion} from 'framer-motion'

export const Contact = () => {
    return (
        <div id='Contact'>
            <motion.h1 className='title'
             initial={{ opacity: 0 }}
             animate={{opacity: 1}}
             transition={{delay: 0.5, duration: 0.5}}>Get in Touch</motion.h1>
            <div className='Contact'>
                <motion.div className="details"
                initial={{ opacity: 0, x: -100}}
                animate={{opacity: 1, x:0}}
                transition={{delay: 0.5, duration: 0.5}}>
                    <h2>My Contact</h2>
                    <p><FaMailBulk size={20} style={{ marginRight: 10, paddingTop: 2 }} />rashidshaik354@gmail.com</p>
                    <p><FaPhone size={20} style={{ marginRight: 10, paddingTop: 2 }} /> +91 8374339100</p>
                </motion.div>
                <motion.div className="sending"
                initial={{ opacity: 0, x: 200}}
                animate={{opacity: 1, x:0}}
                transition={{delay: 0.5, duration: 0.5}}>
                    <div className="inputs">
                        <input type="text" name='name' placeholder='Enter Your Name' className='input-text' />
                        <input type="email" name='email' placeholder='Enter Your Email' className='input-email' />
                        <textarea name="desc" id="desc" cols="25" rows="8" placeholder='Start typing here...'></textarea>
                    </div>
                </motion.div>
            </div>
            <motion.button className='send'
            initial={{ opacity: 0, x: 200}}
            animate={{opacity: 1, x:0}}
            transition={{delay: 0.5, duration: 0.5}}>Send</motion.button>
        </div>
    )
}
