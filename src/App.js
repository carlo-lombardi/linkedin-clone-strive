import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Highlights from "./components/Highlights";
import Activity from "./components/Activity";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/profile/:profileID" component={Profile} />
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
