import React from 'react'

export default function Story(props) {
  const { userPicture, user, time } = props.story
  return (
    <div className="stories">
      <div className="storie">
        <div className="storie-image">
          <img src={userPicture} alt="user picture" />
        </div>
        <div className="storie-user">
          <strong>{user}</strong>
          <span>{time}</span>
        </div>
      </div>
    </div>
  )
}