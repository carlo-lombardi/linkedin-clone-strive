import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  withRouter,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Highlights from "./components/Highlights";
import Activity from "./components/Activity";
import Home from "./components/Home";
import Registration from "./components/Registrationpage";
import Login from "./components/LoginPage";

import React from "react";

class App extends React.Component {
  state = {
    userId: "",
    data: {},
  };

  getMyProfile = async () => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_API_URL}/profile/me`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.ok) {
        let myProfile = await response.json();
        this.setState({ data: myProfile });
        this.setState({ userId: myProfile._id });
        console.log(this.state);
      }
    } catch (error) {
      console.log(error);
    }
  };

  updateMainProfile = async () => {
    await this.getMyProfile();
  };

  // componentDidMount = async () => {
  //   await this.getMyProfile();
  // };
  // componentDidUpdate(prevProps) {
  //   if (prevProps !== this.props) {
  //     this.getMyProfile();
  //     console.log("componentDidUpdate");
  //   }
  // }
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/register"
            render={(props) => <Registration {...props} {...this.state} />}
          />
          {localStorage.getItem("token") === null ? (
            <Redirect to="/login" />
          ) : (
            <Nav userId={this.state.userId} Data={this.state.data} />
          )}

          <Route
            // path="/profile/:profileID"
            // exact
            // render={() => {
            //   return localStorage.getItem("token") === null ? (
            //     <Redirect to="/login" />
            //   ) : (
            //     <Profile  />
            //   );
            // }}
            path="/profile/:profileID"
            exact
            component={Profile}
          />
          <Route
            path="/home"
            exact
            render={() => {
              return localStorage.getItem("token") === null ? (
                <Redirect to="/login" />
              ) : (
                <Home
                  userId={this.state.userId}
                  updateMainProfile={() => {
                    this.updateMainProfile();
                  }}
                />
              );
            }}
          />
        </Router>
      </div>
    );
  }
}

export default App;
