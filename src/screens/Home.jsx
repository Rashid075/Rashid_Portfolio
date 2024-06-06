import React from 'react'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'
import { Footer } from '../components/footer'
import { ToastContainer } from 'react-toastify'
import { Services } from '../components/Services'


export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Services/>
        <Contact/>
        <ToastContainer/>
        
    </div>
  )
}

