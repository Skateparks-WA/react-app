import React from "react";
import SkateNav from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/About.js'

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          
            
            <Switch>
              <Route exact path="/">
                <SkateNav />
                <Hero />
                <Search />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
            
          
        </Router>
      </>
    );
  }
}

export default App;
