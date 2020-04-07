import React, { Component } from 'react'
import axios from 'axios'
import Post from './Post'

class TimeLine extends Component {

  state = {
    posts: []
  }

  componentDidMount = async () => {
    await axios
      .get('http://localhost:3000/posts')
      .then(resposta => this.setState({ posts: resposta.data }))
  }

  render() {
    const { posts } = this.state
    return (
      <div>
        {posts.map(post => (
          <Post key={post.id} conteudo={post} />
        ))}
      </div>
    );
  }
}

export default TimeLine


