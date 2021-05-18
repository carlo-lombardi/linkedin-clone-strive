import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
// import Header from "./components/Header";
// import Highlights from "./components/Highlights";
// import Activity from "./components/Activity";
import Home from "./components/Home";
import Registration from "./components/Registrationpage";
import Login from "./components/LoginPage";
import { getMyProfile } from "./functions/functions";

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
        return myProfile;
      }
    } catch (error) {
      console.log(error);
    }
  };

  updateMainProfile = async () => {
    await getMyProfile();
  };

  componentDidMount = async () => {
    if (localStorage.getItem("token") === null || undefined) {
      <Redirect to="/" />;
    } else {
      const response = await getMyProfile();
      this.setState({ data: response });
      this.setState({ userId: response._id });
    }
  };
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
          <Route exact path="/" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/register"
            render={(props) => <Registration {...props} {...this.state} />}
          />
          {localStorage.getItem("token") === null ? (
            <Redirect to="/" />
          ) : (
            <Nav userId={this.state.userId} />
          )}

          <Route
            // path="/profile/:profileID"
            // exact
            // render={() => {
            //   return localStorage.getItem("token") === null ? (
            //     <Redirect to="/" />
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
                <Redirect to="/" />
              ) : (
                <Home />
              );
            }}
          />
        </Router>
      </div>
    );
  }
}

export default App;
