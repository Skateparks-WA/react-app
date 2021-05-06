import React from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About.js";
import './assets/css/app.css';
import { withAuth0 } from "@auth0/auth0-react";

class App extends React.Component {
  render() {
    return (

      <>
      <div style={{backgroundColor: "#e4e4e4", height: '100vh'}}>
        <Router>
          <Switch>
            <Route exact path="/">
              <NavBar auth0={this.props.auth0}/>
              <Hero />
              <Search />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/profile"></Route>
            <Route exact path="/favorites"></Route>
          </Switch>
        </Router>

      </div>
      </>
    );
  }
}

export default withAuth0(App);
