import "../styles/Home.css"
import { Link } from 'react-router-dom';
import React, { Component } from "react"

export class CreateAccount extends Component {
  render() {
    return (
      <div class="CreateAccount">
        <h1> Create an account </h1>
  
        <div class="loginContainer">
          <h3>Create Account</h3>
          <form>
            <input
              type="text"
              class="form-control"
              placeholder="New Username *"
            ></input>
            <br />
  
            <input
              type="text"
              class="form-control"
              placeholder="New Password *"
            ></input>
            <br />
  
            <button>Create</button>
            <Link to="/">
              <p>Already have an account?</p>
            </Link>
          </form>
        </div>
      </div>
    );
  }

}
