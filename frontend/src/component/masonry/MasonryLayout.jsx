import React from 'react'
import Masonry from 'react-masonry-css';
import Post from './post/Post'
import './MasonryLayout.scss'

const MasonryLayout = ({ blogs }) => {
  const breakpointColumnsObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
  };

  return (
    <Masonry className="masonry" breakpointCols={breakpointColumnsObj}>
      {blogs?.map((blog) => <Post blog = {blog} key={blog._id}/>)}
    </Masonry>
  )
}

export default MasonryLayout