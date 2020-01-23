import React from "react";
import Products from "./Products";

console.log("hola");

class MainContent extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <Products/>
        {/* <h2>Bienvenido</h2>
        <h1>Agrosubex</h1> */}

</div>
      
    );
  }
}

export default  MainContent;
