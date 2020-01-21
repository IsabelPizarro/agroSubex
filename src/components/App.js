import React from "react";
import "../index.css";
 import Header from "./Header";
 import Footer from "./Footer";
 import MainContent from "./MainContent";


class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = pokemons;
  // }

  render() {
    // const imagenPokemos = pokemos.url;
    return (
      <div className="App">
        <div>
          <Header  />
          <MainContent/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
