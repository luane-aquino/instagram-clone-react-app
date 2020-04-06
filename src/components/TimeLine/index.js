import React from "react";
import { FiHeart } from 'react-icons/fi'
import axios from 'axios';
import Helmet from "react-helmet";
import Post from '../Post'

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
        <div className="post">
          {this.state.conteudo.map(content => (
            <Post key={content.id} post={content} />
          ))
          }
        </div>
      </>
    );
  }

}
