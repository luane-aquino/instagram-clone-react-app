import React from 'react'
import { FaHeart } from 'react-icons/fa';

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
        <FaHeart />
      </div>
      <p>{description}</p>
    </div>
  )
}