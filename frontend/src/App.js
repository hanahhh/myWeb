import './App.scss'

import React, { useState ,useEffect } from 'react'

import { Routes, Route } from 'react-router-dom';
import Home from './container/home/Home.jsx'
import Login from './container/login/Login.jsx'
import Blog from './container/blog/Blog.jsx'
import BlogDetail from './container/blogDetail/BlogDetail';
import { Footer } from './component';

import { userQuery } from './utils/data'
import { client } from './client'

import  { AiOutlineArrowUp } from 'react-icons/ai'

function App() {

  const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  const [user, setUser] = useState();
  const [scroll, setScroll] = useState('')

  useEffect(() => {
    const query = userQuery(userInfo?.googleId);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);

  
  window.addEventListener('scroll', (event) => {
    window.scrollY > 100 ? setScroll('visible') : setScroll('')
  });
  
  const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'})
  

  return (
    <div className="app">
      <div className={`scroll ${scroll}`}>
        <div className={`scrollToTop`} onClick={toTop}>
          <AiOutlineArrowUp/>
        </div>
      </div>
      <Routes>
        <Route path="/" exact element={<Home user={user}/>} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/blog" exact element={<Blog user={user}/>} />
        <Route path="/blog/:id" exact element={<BlogDetail user={user}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
