import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.scss'
import Land from './container/landingPage/Land';
import About from './container/about/About';
import Skill from './container/skill/Skill';
import Portfolio from './container/portfolio/Portfolio';
import Footer from './container/footer/Footer';

function App() {

  return (
    <div className="app">
      <Land/>
      <About/>
      <Skill/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
