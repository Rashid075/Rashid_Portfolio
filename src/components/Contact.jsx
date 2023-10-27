import React, { useState } from 'react'
import { FaMailBulk, FaPhone } from 'react-icons/fa'
import '../styling/Contact.css'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Contact = () => {
    const [details, setDetails] = useState({
        name: '',
        email: '',
        desc: '',

    })
    const postData = async (e) => {
        e.preventDefault();
        const { name, email, desc } = details;
        const res = await fetch("https://rashid-portfolio-20374-default-rtdb.firebaseio.com/MyForm.json",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    desc,

                })
            })
            toast.success('Message Sent Successfully')
    }
    return (
        <div id='Contact'>
            <motion.h1 className='title'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}>Get in Touch</motion.h1>
            <div className='Contact'>
                <motion.div className="details"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}>
                    <h2>My Contact</h2>
                    <p><FaMailBulk size={20} style={{ marginRight: 10, paddingTop: 2 }} />rashidshaik354@gmail.com</p>
                    <p><FaPhone size={20} style={{ marginRight: 10, paddingTop: 2 }} /> +91 8374339100</p>
                </motion.div>
                <motion.div className="sending"
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}>
                    <div className="inputs">
                        <input type="text" name='name' placeholder='Enter Your Name' className='input-text' onChange={(e) =>
                            setDetails({ ...details, name: e.target.value })} />
                        <input type="email" name='email' placeholder='Enter Your Email' className='input-email' onChange={(e) =>
                            setDetails({ ...details, email: e.target.value })} />
                        <textarea name="desc" id="desc" cols="25" rows="8" placeholder='Start typing here...' onChange={(e) =>
                            setDetails({ ...details, desc: e.target.value })}></textarea>
                    </div>
                </motion.div>
            </div>
            <motion.button className='send'
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }} onClick={postData}>Send</motion.button>
        </div>
    )
}
