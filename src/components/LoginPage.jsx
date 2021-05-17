// import { Form, Button, Container } from "react-bootstrap";
import React from "react";

import "./styles/login.css";
import { Link } from "react-router-dom";
export default class Login extends React.Component {
  state = {
    password: "",
    username: "",
  };

  logUser = async () => {
    try {
      let response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const res = await response.json();
        console.log(res);
        const accessToken = await res.accessToken;

        localStorage.setItem("token", accessToken);
        console.log(localStorage);

        this.setState({
          password: "",
          username: "",
        });

        this.props.history.push("/home");
      } else {
        alert(
          "User " +
            this.state.username +
            " or password aren't in our database, please try again 🤯👾."
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="login">
        <div className="loginForm">
          <div className="titleLogin">
            <div className="textWrap">
              <h2>Sign in </h2>
              <p>Stay updated on your professional world</p>
            </div>
          </div>
          <label className="inputLabel">Username/E-mail Address</label>
          <input
            className="formInput"
            onChange={(e) =>
              this.setState({
                ...this.state,
                username: e.target.value,
              })
            }
            value={this.state.username}
            type="text"
          ></input>
          <label className="inputLabel">Password</label>
          <input
            className="formInput"
            onChange={(e) =>
              this.setState({
                ...this.state,
                password: e.target.value,
              })
            }
            value={this.state.password}
            type="password"
          ></input>
          <button className="loginButton" onClick={this.logUser}>
            Sign in
          </button>
          <div className="linkWrap">
            <Link className="link" to="/register">
              Create an account
            </Link>
          </div>
        </div>

        <img
          draggable="false"
          className="logoIn"
          src="https://www.shareicon.net/data/512x512/2016/07/08/117028_media_512x512.png"
          alt=""
        />
      </div>
    );
  }
}
