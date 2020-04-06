import React from "react";
import axios from 'axios';
import Story from '../Story'

export default class Sidebar extends React.Component {
  state = {
    content: []
  }

  componentDidMount = () => {
    axios.get("http://localhost:3000/stories")
      .then(res => {
        this.setState({ content: res.data })
      })
  }

  render() {
    return (
      <div>
        <div className="user-info">
          <img
            alt="Perfil"
            src="https://randomuser.me/api/portraits/women/25.jpg"
          />
          <div className="user-bio">
            <strong>Jeniffer carvalho</strong>
            <span>jenicarvalho</span>
          </div>
        </div>
        <br></br>
        <h2>Stories</h2>
        {this.state.content.map(story => (
          <Story key={story.id} story={story} />
        ))}
      </div>
    );
  }

}
