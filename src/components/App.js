import React from "react";
import "../index.css";
 import Header from "./Header";
 import Footer from "./Footer";
 import MainContent from "./MainContent";
 import Form from "./Form";
 import {  Route, Switch } from 'react-router-dom';


class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = pokemons;
  // }

  render() {
    // const imagenPokemos = pokemos.url;
    return (
      <div className="App">
        <div >
          <Header  />
          <Switch>
            <Route exact path="/" component={MainContent} />
            <Route exact path="/Form" component={Form} />
          </Switch>
          <MainContent/>
          <Form/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
