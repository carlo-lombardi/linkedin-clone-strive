// import { Form, Button, Container } from "react-bootstrap";
import React from "react";
import "./styles/login.css";
import { Link } from "react-router-dom";
export default class Register extends React.Component {
  state = {
    name: "",
    surname: "",
    password: "",
    username: "",
    email: "",
    title: "",
    area: "",
    image: "",
    bio: "",
  };

  logUser = async () => {
    try {
      let response = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const res = await response.json();
        const accessToken = await res.accessToken;

        localStorage.setItem("token", accessToken);

        this.setState({});
        this.props.history.push("/home");
      } else {
        alert("Something went wrong 🤯👾.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="login">
        <div className="registerForm">
          <div className="titleLogin">
            <div className="textWrap">
              <h2>Register </h2>
              <p>Welcome to Linkedin, where your business counts</p>
            </div>
          </div>
          <label className="inputLabel">name</label>
          <input
            required
            className="formInput"
            onChange={(e) =>
              this.setState({
                ...this.state,
                name: e.target.value,
              })
            }
            value={this.state.name}
            type="text"
          ></input>
          <label className="inputLabel">surname</label>
          <input
            required
            className="formInput"
            onChange={(e) =>
              this.setState({
                ...this.state,
                surname: e.target.value,
              })
            }
            value={this.state.surname}
            type="text"
          ></input>
          <label className="inputLabel">Email</label>
          <input
            required
            className="formInput"
            onChange={(e) =>
              this.setState({
                ...this.state,
                email: e.target.value,
              })
            }
            value={this.state.email}
            type="email"
          ></input>
          <label className="inputLabel">Title</label>
          <input
            required
            className="formInput"
            onChange={(e) =>
              this.setState({
                ...this.state,
                title: e.target.value,
              })
            }
            value={this.state.title}
            type="text"
          ></input>
          <label className="inputLabel">Country</label>
          <input
            required
            className="formInput"
            onChange={(e) =>
              this.setState({
                ...this.state,
                area: e.target.value,
              })
            }
            value={this.state.area}
            type="text"
          ></input>
          <label className="inputLabel">Bio</label>
          <input
            required
            className="formInput"
            onChange={(e) =>
              this.setState({
                ...this.state,
                bio: e.target.value,
              })
            }
            value={this.state.bio}
            type="text"
          ></input>
          <label className="inputLabel">Username</label>
          <input
            required
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
            required
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

          <label className="inputLabel">
            Put the link of your profile picture
          </label>
          <input
            className="formInput"
            onChange={(e) =>
              this.setState({
                ...this.state,
                image: e.target.value,
              })
            }
            value={this.state.image}
            type="text"
          ></input>
          <button className="loginButton" onClick={this.logUser}>
            Register
          </button>
          <div className="linkWrap">
            <Link className="link" to="/login">
              Already have an account?
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
