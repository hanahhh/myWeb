import React from 'react'
import { client, urlFor } from '../../../client'
import './Post.scss'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Post = ({ blog }) => {
    const navigate = useNavigate()

  return (
      <div className='wrap'>
          <motion.div 
            className='post'
            whileInView={{opacity: [0,1]}}
            transition={{duration: 1}}
            onClick={() => navigate(`/blog/:${blog._id}`)}
          >
            <img src={(urlFor(blog.image).url())} alt="post" /> 
            <span>{blog.title}</span>
          </motion.div>
      </div>
    
  )
}

export default Post