import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class UserInfo extends Component {
  render() {
    const { user, username } = this.props

    return (
      <div className="user-info">
        <img
          alt="Perfil"
          src="https://randomuser.me/api/portraits/women/25.jpg"
        />
        <Link to="/perfil">
          <div className="user-bio">
            <strong>{user}</strong>
            <span>{username}</span>
          </div>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.name,
    username: state.user.username
  }
}

export default connect(mapStateToProps)(UserInfo)
