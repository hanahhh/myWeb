import React, {useState} from 'react'
import './SkillCard.scss'
import { urlFor } from '../../../client'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

const SkillCard = (props) => {

    const { data, index, length } = props
    
    const [isClicked, setIsClicked] = useState(false)

    const toggleClick = () => {
        setIsClicked(!isClicked)
    }

    let size = window.screen.width<=900 ? -70 : -150

  return (
    <div className={`skillCard ${window.screen.width <=900 ? '' : (index%2==0 ? 'upBit' : 'downBit')}`}>
        <div className="content">
            <motion.div className='visible'
                whileInView={isClicked ? {y: [0, size], opacity: [0,1]} : {y: [size, 0], opacity: 1}}
                transition = {{duration: 0.5, ease: 'easeInOut'}}
            >
                <img src={urlFor(data.imgUrl)} alt={data.title} />
                <span className='title'>{data.title}</span>
                <div className="viewMore" onClick={toggleClick}>
                    <span>{isClicked ? 'See less' : 'See more'}</span>
                    <svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64645L28.1716 0.464466C27.9763 0.269204 27.6597 0.269204 27.4645 0.464466C27.2692 0.659728 27.2692 0.976311 27.4645 1.17157L30.2929 4L27.4645 6.82843C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.7308 27.9763 7.7308 28.1716 7.53553L31.3536 4.35355ZM0 4.5H31V3.5H0V4.5Z" fill="black"/>
                    </svg>
                </div>
            </motion.div>
            {isClicked && <motion.div className="invisible"
                whileInView={isClicked && { opacity: [0,1]}}
                transition = {{delay: 0.5,duration: 0.5, ease: 'easeInOut'}}
            >
                <div className="clickView">
                    {(data.detail).map((dt, index) => (
                        <div className="strengthen">
                            <FaCheckCircle className='icon'/>
                            <p>{dt}</p>
                        </div>
                    ))}
                </div>
            </motion.div>}
        </div>
        
    </div>
  )
}

export default SkillCard