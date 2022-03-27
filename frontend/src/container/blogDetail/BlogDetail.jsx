import React, { useEffect, useState } from 'react'
import { Navbar } from '../../component'
import { client } from '../../client'
import { blogDetailQuery } from '../../utils/data'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import BlockContent from "@sanity/block-content-to-react"
import { v4 as uuidv4 } from 'uuid';

import './BlogDetail.scss'

const BlogDetail = ({ user }) => {

  const blogID = useParams()
  let id = blogID.id
  id = id.slice(1, id.length)

  const [post, setPost] = useState(null)
  const [comment, setComment] = useState('')
  const [addingComment, setAddingComment] = useState(false)

  const fetchBlogDetail = () => {
    const query = blogDetailQuery(id)

    client.fetch(query).then((data) => {
      setPost(data[0])
    });
  };

  useEffect(() => {
    fetchBlogDetail()
  }, [blogID])

  const addComment = () => {
    if (comment) {
      setAddingComment(true)
      client
        .patch(id)
        .setIfMissing({ comments: [] })
        .insert('after', 'comments[-1]', [{ comment, _key: uuidv4(), postedBy: { _type: 'postedBy', _ref: user?._id } }])
        .commit()
        .then(() => {
          fetchBlogDetail();
          setComment('');
          setAddingComment(false)
        });
    }
  };

  return (
    <div className='blogDetail'>
      <Navbar user={user} />
      {post && <motion.div 
        className='post'
        whileInView={{opacity: [0,1]}}
        transition={{duration: 1}}
      >
          <span className='title'>{post.title}</span>
          
          <BlockContent
            blocks={post.content}
            projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
            dataset="production"
            className='block'
          />
          <div className="input">
            <span>COMMENT</span>
            <div className="input_comment">
              <input type="text" name="" id="" placeholder='leave a comment' value={comment} onChange={(e) => setComment(e.target.value)}/>
              <button onClick={addComment}>{addingComment ? 'POSTING' : 'POST'}</button>
            </div>
            
          </div>
          <div className="comment">
            {post?.comments?.map((comment) => (
              <div className="single">
                <img 
                  src={comment.postedBy?.image}
                  className="avatar"
                  alt="user-profile"
                />
                <div className="postedBy">
                  <p className='User'>{comment.postedBy?.userName}</p>
                  <p>{comment.comment}</p>
                </div>
              </div>
            ))}
          </div>
      </motion.div>}
    </div>
  )
}

export default BlogDetail