import React from "react"
import { Helmet } from 'react-helmet'
import './styles.css'

export default function Perfil() {
  return (
    <>
      <Helmet><title>Perfil</title></Helmet>
      <div className="page">
        <div className="conteudo">
          <div className="flex">
            <img src="https://randomuser.me/api/portraits/women/19.jpg" alt="Perfil" />

            <div className="resumo">
              <h1>Luane</h1>
              <p>resumo exemplo</p>
              <h2>Minha Stack</h2>
              <ul>
                <li>javascript</li>
                <li>React</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}