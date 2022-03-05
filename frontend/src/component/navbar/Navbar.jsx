import React from 'react'
import './Navbar.scss'
import { motion } from 'framer-motion'

const Navbar = () => {
  const about = () => window.scrollTo({top: 1200, behavior: 'smooth'})
  const skill = () => window.scrollTo({top: 1810, behavior: 'smooth'})
  const portfolio = () => window.scrollTo({top: 2320, behavior: 'smooth'})
  const contact = () => window.scrollTo({top: 3000, behavior: 'smooth'})

  return (
    <motion.div className='navbar'
      whileInView={{opacity: [0,1]}}
      transition={{duration: 1}}
    >
        <div className="wrapper">
            <div className="logo">
                <h1>Hanah<span className='fairy'>DEPEACE</span></h1>
            </div>
            <div className="page">
                <span onClick={about}>ABOUT</span>
                <span onClick={skill}>SKILL</span>
                <span onClick={portfolio}>PORTFOLIO</span>
                <span onClick={contact}>CONTACT</span>
            </div>
        </div>
    </motion.div>
  )
}

export default Navbar