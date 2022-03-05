import React, { useState, useEffect } from 'react'
import './Portfolio.scss'
import { client } from '../../client'
import Project from './project/Project'

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([
        {
          projectName: '',
          brief: '',
          language: '',
          description: '',
          github: '',
          imgUrl: {
            asset: {
              _ref: "image-7a7c5978254af47382852e8458cdd8488f21322e-58x46-png",
              _type: "reference"
            },
            _type: "image"
          },
        }
      ])

  useEffect(() => {
    const query = '*[_type == "portfolio"]';

    client.fetch(query).then((data) => {
      setPortfolio(data)
    });
  }, []);
  return (
    <div className='portfolio'>
        <div className="wrapper">
            <h1>PORTFOLIO</h1>
            <div className="line"></div>
            <div className="projects">
                {portfolio.map((project, index) => (
                    <Project data = {project} index = {index}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio