import React, { Component } from "react";
import axios from "axios";
import { Container } from './style';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import UserDetail from '../components/UserDetail';

const filterOption = [
    {
      key: 'none',
      text: 'none',
      value: 'None',
    },
    {
      key: 'first_name',
      text: 'first_name',
      value: 'First Name',
    },
    {
      key: 'last_name',
      text: 'last_name',
      value: 'Last Name',
    },
  ]
  

class HomePage extends Component {
    state = {
        users: [],
        isLoading: true,
        displayUser: false
    };

    handleImageClick = () => {
      this.setState({ displayUser: true})
    }

    componentDidMount() {
      axios
        .get("https://reqres.in/api/users?delay=3")
        .then(response =>
          response.data.data.map(user => ({
            name: `${user.first_name} ${user.last_name}`,
            email: `${user.email}`,
            image: `${user.avatar}`,
            Id: `${user.id}`
          }))
        )
        .then(users => {
          this.setState({
            users,
            isLoading: false
          });
        })
        .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
      const { isLoading, users } = this.state;
        return (
            <Container>
                <h2>USERS</h2>
                {/* <select
                    options={filterOption}
                /> */}
                <Autocomplete
                    className="sort"
                    options={filterOption}
                    getOptionLabel={option => option.value}
                    renderInput={params => (
                        <TextField {...params} label="Filter" variant="outlined" maxWidth />
                      )}
                />
              <div className="chessboard">
                  {!isLoading ? (
                    users.map(user => {
                      const { name, image } = user;
                      return (
                        <div className="chessdiv" key={name}>
                          {/* <p>{name}</p> */}
                          <div className="grid">
                            <div className="image">
                            <img src={image} onClick={this.handleImageClick} alt={name} />
                            <p>{name}</p>
                            {this.state.displayUser && <UserDetail />}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div class="load-wrapp">
                    <div class="load-10">
                      <p>Loading....</p>
                        <div class="bar"></div>
                    </div>
                </div>
                )}
              </div>
              {/* <UserDetail /> */}
            </Container>
        );
    }
}

export default HomePage;