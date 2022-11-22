import React, { Component } from 'react';
import { connect } from 'react-redux'
import Sidebar from "../../components/Sidebar";
import TimeLine from "../../components/TimeLine";
import api from '../../api.json'

class Home extends Component {

  componentDidMount = async () => {
    this.props.dispatch({
      type: 'GET_USER',
      payload: api.user
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
