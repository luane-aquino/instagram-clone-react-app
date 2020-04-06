import React from "react";
import { FiHeart } from 'react-icons/fi'
import axios from 'axios';
import Post from '../Post'

export default class TimeLine extends React.Component {
  state = {
    content: []
  }

  componentDidMount = () => {
    axios.get("http://localhost:3000/posts")
      .then(res => {
        this.setState({ content: res.data })
      })
  }

  render() {
    return (
      <>
        <div className="post">
          {this.state.content.map(post => (
            <Post key={post.id} post={post} />
          ))
          }
        </div>
      </>
    );
  }

}
