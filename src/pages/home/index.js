import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'

import Sidebar from "../../components/Sidebar";
import TimeLine from "../../components/TimeLine";

class Home extends Component {

  componentDidMount = async () => {
    await axios
      .get("http://localhost:3000/user")
      .then(resposta => {
        this.props.dispatch({
          type: 'GET_USER',
          payload: resposta.data
        })
      })
  }

  render() {
    return (
      <div className="home">
        <TimeLine />
        <Sidebar />
      </div>
    );
  }
}

export default connect()(Home)
