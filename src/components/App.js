import React from "react";
import "../index.css";
 import Header from "./Header";
 import Footer from "./Footer";
 import MainContent from "./MainContent";
 import Form from "./Form";
 import Products from "./Products";
 import Logistic from "./Logistic";
 import SocialResponsability from "./SocialResponsability";
 import {  Route, Switch } from 'react-router-dom';


class App extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
   
    return (
      <div className="App">
        <div >
          <Header  />
          <Switch>
            <Route exact path="/" component={MainContent} />
            <Route exact path="/Form" component={Form} />
            <Route exact path="/Logistic" component={Logistic} />
            <Route exact path="/Products" component={Products} />
            <Route exact path="/Responsability" component={SocialResponsability} />
          </Switch>
          {/* <MainContent/> */}
          
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
