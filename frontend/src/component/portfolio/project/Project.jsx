import React from 'react'
import './Project.scss'
import { urlFor } from '../../../client'
import { motion } from 'framer-motion'

const Project = (props) => {

  const { data, index } = props

  return (
    <motion.div className='project'
        whileInView={index%2==0 ? {x: [-150, 0], opacity: [0,1]} : {x: [150, 0], opacity: [0,1]}}
        transition = {{duration: 0.5, ease: 'easeInOut'}}
    >
        {index%2==0 || window.screen.width <=900 ? 
            <div className="left">
                <img src={urlFor(data.imgUrl)} alt={data.projectName} />
            </div> :
            <div className="right">
                <span>{data.projectName}</span>
                <p>{data.brief}</p>
                <p>{`Language: ${data.language}`}</p>
                <p>{`Description: ${data.description}`}</p>
                <div className="git">
                    <a href={data.github} target='blank'>Github</a>
                    <svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64645L28.1716 0.464466C27.9763 0.269204 27.6597 0.269204 27.4645 0.464466C27.2692 0.659728 27.2692 0.976311 27.4645 1.17157L30.2929 4L27.4645 6.82843C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.7308 27.9763 7.7308 28.1716 7.53553L31.3536 4.35355ZM0 4.5H31V3.5H0V4.5Z" fill="black"/>
                    </svg>
                </div>
                
            </div>
        }
        <div className="center"></div>
        {index%2!=0 && window.screen.width >= 900 ? 
            <div className="left">
                <img src={urlFor(data.imgUrl)} alt={data.projectName} />
            </div> :
            <div className="right">
                <span>{data.projectName}</span>
                <p>{data.brief}</p>
                <p>{`Language: ${data.language}`}</p>
                <p>{`Description: ${data.description}`}</p>
                <div className="git">
                    <a href={data.github} target='blank'>Github</a>
                    <svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64645L28.1716 0.464466C27.9763 0.269204 27.6597 0.269204 27.4645 0.464466C27.2692 0.659728 27.2692 0.976311 27.4645 1.17157L30.2929 4L27.4645 6.82843C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.7308 27.9763 7.7308 28.1716 7.53553L31.3536 4.35355ZM0 4.5H31V3.5H0V4.5Z" fill="black"/>
                    </svg>
                </div>
                
            </div>
        }
    </motion.div>
  )
}

export default Project