import React from 'react';
import { FaMailBulk, FaPhone, FaGithub, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styling/Contact.css';

export const Contact = () => {
    return (
        <div className='contacts'>
            <div className='contact-text'>
                <h2>Contact <span>Me</span></h2>
                <h3>Let's Work Together</h3>
                <ul className='contact-list'>
                    <li><FaMailBulk size={20} style={{ marginRight: 10 }} /> rashidshaik354@gmail.com</li>
                    <li><FaPhone size={20} style={{ marginRight: 10 }} /> +91 8374339100</li>
                </ul>
                <div className='contact-icons'>
                    <a href='https://github.com/Rashid075'><FaGithub size={20} /></a>
                    <a href='/'><FaYoutube size={20} /></a>
                    <a href='https://www.instagram.com/_m_u_n_n_a_075/?next=%2F'><FaInstagram size={20} /></a>
                    <a href='https://www.linkedin.com/in/shaik-rashid/'><FaLinkedin size={20} /></a>
                </div>
            </div>
            <div className='last-text'>
                <p>Developed by Shaik Rashid © 2024</p>
            </div>
        </div>
    );
};
