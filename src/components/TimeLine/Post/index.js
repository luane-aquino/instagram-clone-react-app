import React, { Component } from "react";
import { FiHeart } from 'react-icons/fi';
import axios from "axios";
import { connect } from "react-redux";

class Post extends Component {

  like = async () => {
    this.props.user.likes++
    await axios.put("http://localhost:3000/user/", this.props.user)
    this.props.dispatch({
      type: "PUT_LIKE",
      payload: this.props.user
    })
  }

  render() {
    const { userPicture, userName, location, postPicture, description } = this.props.conteudo
    return (
      <div className="post">
        <header>
          <img src={userPicture} alt="user" />
          <div className="post-user">
            <strong>{userName}</strong>
            <span>{location}</span>
          </div>
        </header>
        <div className="post-image">
          <img src={postPicture} alt="post" />
        </div>
        <div className="post-likes" onClick={this.like}>
          <FiHeart />
        </div>
        <p>{description}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Post)