import React, { Component } from 'react'
import axios from 'axios'
import Storie from './Storie'

export default class Stories extends Component {

  state = {
    stories: []
  }

  componentDidMount = async () => {
    await axios
      .get('http://localhost:3000/stories')
      .then(resposta => this.setState({ stories: resposta.data }))
  }

  render() {
    const { stories } = this.state
    return (
      <div className="stories">
        <h2>Stories</h2>

        {stories.map(storie => (
          <Storie key={storie.id} conteudo={storie} />
        ))}
      </div>
    );
  }
}
