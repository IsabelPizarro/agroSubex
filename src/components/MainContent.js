import React from "react";
import ban from "../components/shared/Banner";

console.log("hola");

class MainContent extends React.Component {
  render() {
    return (
  <div className="HomeContainer mb-5">
      <div className="mainContainer">

          </div>
    <div className="CommonContainer">
      <div className="banner">
      <h2  className="bannerTitle pt-0 mt-0 mb-1">En constante investigación</h2>
      <div className="d-flex justify-content-around">
      <div className="buscando esconder pt-3">
        Buscando nuevas alternativas <br/> para el mundo rural
      </div>
      <div className="buscando pl-1">
        <p>- Productos rentables</p>
        <p>- Nutrólogos a su servicio</p>
        <p>- Reciclando subproductos</p>
      </div>
      </div>

        </div>
      </div>
</div>
      
    );
  }
}

export default  MainContent;
