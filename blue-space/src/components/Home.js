import "../styles/Home.css"
import { Link } from 'react-router-dom';
import React, { Component } from "react"

import { connect } from "react-redux";
import { login } from "../actions/itemActions.js";

import { Provider } from "react-redux";
import store from "../store";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
     username: "",
     password: ""
    };
  }

  handleUsernameChange = event => {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.username = event.target.value;
    event.preventDefault();
  };

  handlePasswordChange = event => {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.password = event.target.value;
    event.preventDefault();
  };

  
  handleSubmit = event => {
    console.log("Login")
    const user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(user);
    event.preventDefault();
  };

  render() {
    return (
      <Provider store={store}>
        <div class="Home">
        <h1>Welcome to Blue Space {":)"} </h1> 
        <div class="loginContainer">
          <h3>Login</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Username *"
              onChange={this.handleUsernameChange}
            ></input>
            <br />
  
            <input
              type="text"
              className="form-control"
              placeholder="Password *"
              onChange={this.handlePasswordChange}
            ></input>
            <br />
  
            <button type="submit">Create</button>
            <Link to="/createAccount">
              <p>Already have an account?</p>
            </Link>
          </form>
        </div>
      </div>


      </Provider>
          );
  }

}

const mapStateToProps = state => ({
  user: state.user,
  userAlreadyExists: state.userAlreadyExists
});

export default connect(mapStateToProps, { login })(Home);
