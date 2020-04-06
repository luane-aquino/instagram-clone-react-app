import React from "react"
import { Helmet } from 'react-helmet'
import axios from 'axios'
import './styles.css'

export default class Perfil extends React.Component {
  state = {
    content: {}
  }

  componentDidMount = () => {
    axios.get("http://localhost:3000/perfil")
      .then(resposta => {
        this.setState({ content: resposta.data })
      })
  }

  render() {
    const { content } = this.state
    return (
      <>
        <Helmet><title>Perfil</title></Helmet>
        <div className="page">
          <div className="conteudo">
            <div className="flex">
              <img src={content.userPicture} alt="Perfil" />

              <div className="resumo">
                <h1>{content.name}</h1>
                <br></br>
                <h4>{content.bio}</h4>
                <p>{content.age} anos</p>
                <p>Site: {content.site}</p>
                <p>Joined at {content.joinAt}</p>
                <br></br>
                <h2>Minha Stack</h2>
                {content.stacks !== undefined && (
                  <ul>
                    {content.stacks.map((item, indice) => (
                      <li key={indice}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }

}