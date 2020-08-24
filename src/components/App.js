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
import Buildings from "./Buildings/Buildings";
import Design from "./Buildings/Design";
import Vessels from "./Buildings/Vessels";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll:false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
}


handleScroll(event) {
  if (window.scrollY === 0) {
    console.log("se mueva pa bajo")
      this.setState({scroll: false});
      console.log(this.state.scroll);
      document.getElementById("myNav").className = "nav";
  }
  else if (window.scrollY !== 0) {
      this.setState({scroll: true});
      console.log(this.state.scroll);
      document.getElementById("myNav").className = "navScroll";
  }
}


  render() {
   
    return (
      <div className="App">
          <Header  />
          <Switch>
            <Route exact path="/" component={MainContent} />
            <Route exact path="/Form" component={Form} />
            <Route exact path="/Logistic" component={Logistic} />
            <Route exact path="/Products" component={Products} />
            <Route exact path="/Responsability" component={SocialResponsability} />
            <Route exact path="/buildings" component={Buildings} />
            <Route exact path="/design" component={Design} />
            <Route exact path="/vessels" component={Vessels} />
         
          </Switch>
          {/* <MainContent/> */}
          
          <Footer/>
    </div>
    );
  }
}

export default App;
