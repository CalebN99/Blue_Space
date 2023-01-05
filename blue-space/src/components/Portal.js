import "../styles/Portal.css"
import { Link, Navigate} from 'react-router-dom';
import React, { Component } from "react"

import { connect } from "react-redux";
import { login } from "../actions/itemActions.js";

import { Provider } from "react-redux";
import store from "../store";

class Portal extends Component {
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
                <h4>{this.props.user.user.username}</h4>
                <div class="list-group list-group-flush mx-3 mt-4">
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                    <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple active">
                    <i class="fas fa-chart-area fa-fw me-3"></i><span>Webiste traffic</span>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                      class="fas fa-lock fa-fw me-3"></i><span>Password</span></a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                      class="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                    <i class="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                      class="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                      class="fas fa-globe fa-fw me-3"></i><span>International</span></a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                      class="fas fa-building fa-fw me-3"></i><span>Partners</span></a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                      class="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                      class="fas fa-users fa-fw me-3"></i><span>Users</span></a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                      class="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a>
                </div>
              </div>
            </nav>
            
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