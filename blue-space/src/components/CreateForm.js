import "../styles/CreateForm.css";
import { Link } from 'react-router-dom';
import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../actions/itemActions.js";

import { Provider } from "react-redux";
import store from "../store";

class CreateForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
     formName: "",
     formDescription: ""

    };
  }

  handleFormNameChange = event => {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.formName = event.target.value;
    event.preventDefault();
  };

  handleDescriptionChange = event => {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.formDescription = event.target.value;
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
        <div className="createForm">
          <div className='newFormContainer'>
              <h2>New Form</h2>
              <form class="newForm" onSubmit={this.handleSubmit}>
              
              <label className="descLabel">Form Name: </label>
                  <input type="text" className="form-control" placeholder="New Form Name *"
              
                   onChange={this.handleFormNameChange} required></input>
                     {/* {
              this.props.userAlreadyExists ? (
                  <p>User already exists</p>
              ) : (
                <br/>
              )
            } */}
            
                  <br/>
                  <label className="descLabel">Description: </label>
                  <textarea rows="4" cols="50" className="form-control" placeholder="Description *" onChange={this.handleDescriptionChange} required></textarea>
  
                  <button className="button" type="submit">Create</button>
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

export default connect(mapStateToProps, { createUser })(CreateForm);