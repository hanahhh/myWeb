import React, { useState, useEffect } from 'react'
import './Navbar.scss'
import { motion } from 'framer-motion'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { RiLoginCircleFill } from 'react-icons/ri';
import { useNavigate, useLocation } from 'react-router-dom'
import { Link } from 'react-scroll'

import { userQuery } from '../../utils/data'
import { client } from '../../client'

const Navbar = () => {
  const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  const [user, setUser] = useState();
  
  const [toggle, setToggle] = useState(false);
  const [isClicked, setIsClicked] = useState(false)
  const navigate = useNavigate()
  let location = useLocation()
  location = location.pathname.split('/')[1]

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  }

  useEffect(() => {
    const query = userQuery(userInfo?.googleId);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);

  return (  
    <motion.div className='navbar'
      whileInView={{opacity: [0,1]}}
      transition={{duration: 1}}
    >
        <div className="wrapper">
            <div className="logo" onClick={() => navigate("/")}>
                <h1>Hanah<span className='fairy'>DEPEACE</span></h1>
            </div>
            <div className="page">
                <Link className='link' to="about" spy={true} smooth={true} offset={600} duration={500} onClick={() => location!='' && navigate('/')}>ABOUT</Link>
                <Link className='link' to="skill" spy={true} smooth={true} offset={0} duration={500} onClick={() => location!='' && navigate('/')}>SKILL</Link>
                <Link className='link' to="portfolio" spy={true} smooth={true} offset={50} duration={500} onClick={() => location!='' && navigate('/')}>PORTFOLIO</Link>
                <Link className='link' to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={() => location!='' && navigate('/')}>CONTACT</Link>
                <Link className='link' onClick={() => navigate("/blog")}>BLOG</Link>
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

                    {['login', 'about', 'skill', 'portfolio', 'contact', 'blog'].map((item) => (
                      <li key={item}>
                        {!(user && item==='login') && 
                        <Link
                          to={item}
                          href={`#${item}`} 
                          offset={item === 'about' ? 250 : 0}
                          onClick={() => {
                            setToggle(false); 
                            if(item === 'blog') {navigate("/blog")}
                            if(item === 'login') {navigate("/login")}
                            location!='' && navigate('/')
                            }
                          }
                        >
                          {item}
                        </Link>}
                      </li>
                    ))}
                    <li>
                      {user && <a href="" onClick={handleLogout}>LOGOUT</a>}
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>
        </div>
        {!user ? <RiLoginCircleFill size='2.5vw' className="icons-login" onClick={() => navigate("/login")}/> :
          <div className="icons-login">
            <img className='user' src={(user.image)} alt={user?.userName} onClick={() => setIsClicked(!isClicked)}/>
            {isClicked===true &&
              <motion.div 
                className="logout"
                whileInView={{y: [0, 10], opacity: [0,1]}}
                transition={{duration: 0.5}}
                onClick={handleLogout}
              >
                LOGOUT
              </motion.div>
            }
          </div>
        }
    </motion.div>
  )
}

export default Navbar