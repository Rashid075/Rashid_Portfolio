import React from 'react'
import '../styling/footer.css'

import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp,  } from 'react-icons/fa'
export const Footer = () => {
    return (
        <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: 'white', marginRight:"2rem"}}/>
                    <div>
                        <p>Visakhapatnam, Andhra Pradesh</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: 'white', marginRight:"2rem"}}/>+91 8374339100</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: 'white', marginRight:"2rem"}}/>rashidshaik354@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Myself</h4>
                <p>This is Shaik Rashid. I am a computer Science Engineering student in Vignan's Institute of Information Technology</p>
                <div className="social">
                    <a href='https://www.linkedin.com/in/shaik-rashid-9b6282238/'><FaLinkedin size={20} style={{color: 'white', marginRight:"2rem"}} /></a>
                    <a href='https://www.instagram.com/'><FaInstagram size={20} style={{color: 'white', marginRight:"2rem"}} /></a>
                    <a href='https://web.whatsapp.com/'><FaWhatsapp size={20} style={{color: 'white', marginRight:"2rem"}} /></a>
                </div>
            </div>
        </div>
    </div>
    )
}
