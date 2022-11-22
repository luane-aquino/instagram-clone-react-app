import React, { Component } from 'react'
import Storie from './Storie'
import api from '../../../api.json'

export default class Stories extends Component {

  state = {
    stories: []
  }

  componentDidMount = async () => {
    this.setState({ stories: api.stories })
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
