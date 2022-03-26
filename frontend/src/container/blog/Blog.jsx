import React, { useState, useEffect } from 'react'
import './Blog.scss'
import {Navbar, MasonryLayout} from '../../component'

import { client } from '../../client'
import { blogsQuery } from '../../utils/data'

const Blog = ({ user }) => {
  const [blogs, setBlogs] = useState()

  useEffect(() => {
    client.fetch(blogsQuery).then((data) => {
      setBlogs(data);
    });
  }, []);

  return (
    <div className='blog'>
      <Navbar user={user&&user} />
      <MasonryLayout blogs={blogs}/>
    </div>
  )
}

export default Blog