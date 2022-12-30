import "../styles/Home.css";
import { Link } from 'react-router-dom';
import React, { Component } from "react";

export class Home extends Component {

  render() {
    return (
      <div class="Home">
          <h1>Welcome to Blue Space {":)"} </h1> 
          <div class='loginContainer'>
              <h3>Login</h3>
              <form>
              
                  <input type="text" class="form-control" placeholder="Username *"></input>
                  <br/>
    
                  <input type="text" class="form-control" placeholder="Password *"></input>
                  <br/>
  
                  <button>Login</button>
                  <Link to="/createAccount"><p>create an account</p></Link>
                 
              </form>
          </div>
      </div>
    
    );
  }

}