import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../styling/Project.css'
import Scholar from '../assets/logo.jpg'
import Food from '../assets/food.png'
import Rent from '../assets/rental.png'
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { FaGithub } from 'react-icons/fa';
import {motion} from 'framer-motion'

export const Projects = () => {
    return (
        <div className='containers' id="Project">
            <motion.h1 className='headers'>Projects</motion.h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <motion.div className="container">
                        <img src={Scholar} alt="Scholarship" className='project-image' />                    <h4>Scholarship Portal</h4>
                        <p>This is a portal where students can able to spply for the scholarships in a single application. Where students also have Eligibility criteria.This is a single web page application.</p>
                        <a href="https://github.com/Rashid075/Scholarship-Eligibility-Portal"><button className='btn-link'> <FaGithub className='icon' />GitHub Link </button></a>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                    <motion.div className="container">
                        <img src={Food} alt="Food_Delivery" className='project-image' />
                        <h4>Food Delivery App</h4>                     <p>This is a Website where we can oder food online at any time any where with less cost. Our partners are best because they make the delicious foods.</p>
                        <a href="https://github.com/Rashid075/Food_Delivery"> <button className='btn-link'><FaGithub className='icon' />GitHub Link</button></a>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                    <motion.div className="container">
                        <img src={Rent} alt="Farmer_Rental" className='project-image' />
                        <h4>Farmer Rental System</h4>
                        <p>This is a website for the farmers where the farmers can rent any items and tools very easily from the borrower that are necessary for the farming.</p>
                        <button className='btn-link'><FaGithub className='icon' />GitHub Link</button>
                    </motion.div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
