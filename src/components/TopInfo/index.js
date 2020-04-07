import React, { Component } from "react";
import { FiUser, FiHeart } from "react-icons/fi";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class TopInfo extends Component {
  render() {
    const { user, likes } = this.props

    return (
      <div className="top-info">
        <span>
          <FiHeart />
          <b>{likes}</b>
        </span>
        <Link to="/perfil">
          <span>
            <FiUser />
            {user}
          </span>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.name,
    likes: state.user.likes
  }
}

export default connect(mapStateToProps)(TopInfo)