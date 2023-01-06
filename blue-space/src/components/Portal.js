import "../styles/Portal.css"
import { Link, Navigate} from 'react-router-dom';
import React, { Component } from "react"

import { connect } from "react-redux";
import { login } from "../actions/itemActions.js";

import { Provider } from "react-redux";
import store from "../store";

import CreateForm from "./CreateForm";

class Portal extends Component {
  constructor(props) {
    super(props);
    this.state = {
     username: "",
     password: "",
     display: "default"
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

  componentDidMount = () => {
    console.log("User Props in portal: ", this.props.user)
  }

  render() {
    if (this.props.user.user.length === 0) {
  
      return <Navigate to="/" />
    }
    return (
      <Provider store={store}>
        <div className="portal">
        <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
              <div class="position-sticky">
                <h3>{this.props.user.user.username}</h3>
                <h4>Forms</h4>
                <div class="list-group list-group-flush mx-3 mt-4">
                  <div href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                    <p class="fas fa-tachometer-alt fa-fw me-3"></p><span>Main dashboard</span>
                  </div>
        
                </div>
              </div>
              
            </nav>

            <div className="topNav">
              <p onClick={() => {
                this.setState({display: "newForm"})
              }}>Create new form +</p>

            </div>
            
           {
              (() => {
                if (this.state.display === "newForm") {
                  return <CreateForm />
                } else {
                  return <h1>Welcome to your Blue Space</h1>
                }
            
              })()
            }

      
           
            
          
        </div>

      </Provider>
          );
  }

}

const mapStateToProps = state => ({
  user: state.user,
  userAlreadyExists: state.userAlreadyExists
});

export default connect(mapStateToProps, { login })(Portal);