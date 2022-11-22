import React, { Component } from 'react'
import Post from './Post'
import api from '../../api.json'

class TimeLine extends Component {

  state = {
    posts: []
  }

  componentDidMount = async () => {
    this.setState({ posts: api.posts })
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


