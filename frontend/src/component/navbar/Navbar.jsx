import React, { useState } from 'react'
import './Navbar.scss'
import { motion } from 'framer-motion'
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const about = () => window.scrollTo({top: 1200, behavior: 'smooth'})
  const skills = () => window.scrollTo({top: 1810, behavior: 'smooth'})
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
                <span onClick={skills}>SKILLS</span>
                <span onClick={portfolio}>PORTFOLIO</span>
                <span onClick={contact}>CONTACT</span>
            </div>
            <div className="app__navbar-menu">
              {!toggle && <HiMenuAlt4 onClick={() => setToggle(true)} />}

              {toggle && (
                <motion.div
                  whileInView={{ x: [300, 0] }}
                  transition={{ duration: 0.85, ease: 'easeOut' }}
                >
                  <HiX onClick={() => setToggle(false)} />
                  <ul>
                    {['about', 'skills', 'portfolio', 'contact'].map((item) => (
                      <li key={item}>
                        <a href={`#${item}`} onClick={() => {setToggle(false); about();}}>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
        </div>
    </motion.div>
  )
}

export default Navbar