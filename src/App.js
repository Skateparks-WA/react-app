import React from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About.js";
import './assets/css/app.css';

class App extends React.Component {
  render() {
    return (
      
      <>
      <div style={{backgroundColor: "#e4e4e4", height: '100vh'}}>
        <Router>
          <Switch>
            <Route exact path="/">
              <NavBar />
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

export default App;
