import React from 'react'
import { FiHeart } from 'react-icons/fi';

export default function Post(props) {
  const { userPicture, user, location, postPicture, description } = props.post
  return (
    <div>
      <header>
        <img src={userPicture} alt="user picture" />
        <div className="post-user">
          <strong>{user}</strong>
          <span>{location}</span>
        </div>
      </header>
      <div className="post-image">
        <img src={postPicture} alt="post picture" />
      </div>
      <div className="post-likes">
        <FiHeart />
      </div>
      <p>{description}</p>
    </div>
  )
}