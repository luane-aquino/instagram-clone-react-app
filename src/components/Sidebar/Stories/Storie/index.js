import React from 'react';

export default function Storie(props) {

  const { user, userPicture, time } = props.conteudo

  return (
    <div className="storie">
      <div className="storie-image">
        <img src={userPicture} alt={user} />
      </div>
      <div className="storie-user">
        <strong>{user}</strong>
        <span>{time}</span>
      </div>
    </div>
  );
}
