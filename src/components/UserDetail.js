import React, { Component } from 'react';
import axios from "axios";
import { Container, BodyContainer } from './styles';

class UserDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: [],
      Id: 2
      //here am assigned Id I mean am hardcoded, using redux consumes more time.
      //With redux we can store Id in store and use that state here in second api call.
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
      <BodyContainer>
        <Container>
            <div className="container">
                  <img src={this.state.userList.avatar} alt=""/>
                <h1>{this.state.userList.first_name} {this.state.userList.last_name}</h1>
                <p>Email: {this.state.userList.email}</p>
            </div>
        </Container>
      </BodyContainer>
    );
  }
}

export default UserDetail;