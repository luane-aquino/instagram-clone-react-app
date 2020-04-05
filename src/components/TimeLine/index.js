import React from "react";
import { FiHeart } from 'react-icons/fi'
import axios from 'axios';
import Helmet from "react-helmet";

export default class TimeLine extends React.Component {
  state = {
    conteudo: []
  }

  componentDidMount = () => {
    axios.get("http://localhost:3000/posts")
      .then(res => {
        this.setState({ conteudo: res.data })
      })
  }

  render() {
    return (
      <>
        <Helmet><title>Timeline</title></Helmet>
        <div className="post">
          {this.state.conteudo.map(content => (
            <div key={content.id}>
              <header>
                <img src={content.userPicture} alt="Lala" />
                <div className="post-user">
                  <strong>{content.user}</strong>
                  <span>{content.location}</span>
                </div>
              </header>
              <div className="post-image">
                <img src={content.postPicture} alt="daniela" />
              </div>
              <div className="post-likes">
                <FiHeart />
              </div>
              <p>{content.description}</p>
            </div>
          ))
          }
        </div>
      </>
    );
  }

}
