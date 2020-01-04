import React, { Component } from 'react';
import axios from "axios";
import { Container } from './styles';

class UserDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: [],
      Id: 6
    };
  }



  componentDidMount() {
    axios.get(`https://reqres.in/api/users/${this.state.Id}`)
    .then(res => {
      const users = res.data.data;
      this.setState({ userList: users});
    });
  }



  render() {
    return (
      <Container>
          <div className="container">
                <img src={this.state.userList.avatar} onClick={this.userHandler} alt=""/>
              <h1>{this.state.userList.first_name} {this.state.userList.last_name}</h1>
              <p>Email: {this.state.userList.email}</p>
          </div>
      </Container>
    );
  }
}

export default UserDetail;