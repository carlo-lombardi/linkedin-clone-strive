import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Highlights from "./components/Highlights";
import Activity from "./components/Activity";
import Home from "./components/Home";
const userID = "609b18ce3a78aa0f08b0b0ea";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav userID={userID} />
        <Route path="/profile/:profileID" exact component={Profile} />
        <Route path="/" exact component={Home} />
      </Router>
    </div>
  );
}

export default App;
