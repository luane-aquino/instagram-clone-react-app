import React, { Component } from "react";
import api from '../../api.json'

class Perfil extends Component {

  state = {
    perfil: {}
  }

  componentDidMount = async () => {
    this.setState({ perfil: api.perfil })
  }

  render() {
    const { name, userPicture, age, joinAt, bio, site } = this.state.perfil

    return (
      <div className="profile">
        <img alt={name} src={userPicture} />
        <div className="info">
          <p>{bio}</p>
          <ul>
            <li>{name}</li>
            <li>{age}</li>
            <li>{joinAt}</li>
            <li>{site}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Perfil