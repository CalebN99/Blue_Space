import "../styles/Home.css";
import { Link } from 'react-router-dom';
import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../actions/itemActions.js";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
     username: "",
     password: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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
  };

  render() {

    return (
      <div className="Home">
          <h1>Welcome to Blue Space {":)"} </h1> 
          <div className='loginContainer'>
              <h3>Login</h3>
              <form onSubmit={this.handleSubmit}>
              
                  <input type="text" className="form-control" placeholder="Username *"
                   value={this.state.username}
                   onChange={this.handleChange}></input>
                  <br/>
    
                  <input type="text" className="form-control" placeholder="Password *"
                   value={this.state.password}
                   onChange={this.handleChange}></input>
                  <br/>
  
                  <button type="submit">Login</button>
                  <Link to="/createAccount"><p>create an account</p></Link>
                 
              </form>
          </div>
      </div>
    
    );
  }

}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { createUser })(Home);