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
    //we can use redux to store ID from first api call and keep updating onclick image, am just doing like I am 
    //assigned ID as 1 for second api.
    render() {
      const { isLoading, users } = this.state;
        return (
            <Container>
                <h2>USERS</h2>
                <Autocomplete
                    className="sort"
                    options={filterOption}
                    getOptionLabel={option => option.value}
                    renderInput={params => (
                        <TextField {...params} label="Filter" variant="outlined" maxWidth />
                      )}
                />
              <div className="griddiv">
                  {!isLoading ? (
                    users.map(user => {
                      const { name, image } = user;
                      return (
                        <div key={name}>
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
            </Container>
        );
    }
}

export default HomePage;