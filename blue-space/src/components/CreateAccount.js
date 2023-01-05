import "../styles/Home.css";
import { Link } from 'react-router-dom';
import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../actions/itemActions.js";

import { Provider } from "react-redux";
import store from "../store";

class CreateAccount extends Component {

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
    console.log("Submit")
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.createUser(newUser);
    event.preventDefault();

    console.log("prop: ", this.props.userAlreadyExists)
  };

  render() {

    return (
      <Provider store={store}>
        <div className="createAccount">
          <h1>Welcome to Blue Space {":)"} </h1> 
          <div className='loginContainer'>
              <h3>Create an Account</h3>
              <form onSubmit={this.handleSubmit}>
              
                  <input type="text" className="form-control" placeholder="New Username *"
              
                   onChange={this.handleUsernameChange}></input>
                     {
              this.props.userAlreadyExists ? (
                  <p>User already exists</p>
              ) : (
                <br/>
              )
            }
            
                  <input type="text" className="form-control" placeholder="New Password *"
              
                   onChange={this.handlePasswordChange}></input>
                  <br/>
  
                  <button type="submit">Create</button>
                  <Link to="/"><p>Already have an account?</p></Link>
                 
              </form>
          </div>
      </div>
      </Provider>

    
    );
  }

}

const mapStateToProps = state => ({
  user: state.user,
  userAlreadyExists: state.user.userAlreadyExists
});

export default connect(mapStateToProps, { createUser })(CreateAccount);