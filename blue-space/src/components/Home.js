import "../styles/Home.css"
import { Link, Navigate } from 'react-router-dom';
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
    console.log("loggedIn? :", this.props.loggedIn)
  };

  componentDidMount = () => {
    console.log("loggedIn? :", this.props.loggedIn)
  }

  render() {
    if (this.props.loggedIn) {
      return <Navigate to="/portal" />;
    }
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
              required
            ></input>
            <br />
  
            <input
              type="text"
              className="form-control"
              placeholder="Password *"
              onChange={this.handlePasswordChange}
              required
            ></input>
                       {
              this.props.incorrectCreds ? (
                  <p id="incorrectLogin">Username or Password is incorrect</p>
              ) : (
                <br/>
              )
            }
  
            <button type="submit">Login</button>
            <Link to="/createAccount">
              <p>Create an Account</p>
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
  userAlreadyExists: state.user.userAlreadyExists,
  loggedIn: state.user.loggedIn,
  incorrectCreds: state.user.incorrectCreds
});

export default connect(mapStateToProps, { login })(Home);
