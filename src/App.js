import React from "react";
import SkateNav from './components/Navbar'
import Hero from './components/Hero'
import Search from './components/Search'



class App extends React.Component {


  render() {
    return (
      <>
      
        <SkateNav />
        <Hero />
        <Search />
      </>
      );
  }




}

export default App;
