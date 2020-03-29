import React from "react";



class Products extends React.Component {
  render() {
    return (
          <div  className="CommonContainer">
            <h1>Nuestros productos.</h1>
            <ul>
              <li>
                <div class="card small">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="./cascarilla-de-cacao.jpg"/>
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">Brocoli<i class="material-icons right">Mas Info</i></span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Brocoli<i class="material-icons right">Cerrar</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
              </div>
              </li>
            <li>
              <div class="card small">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="./pulpa-de-remolacha-azucarera.jpg"/>
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                  <p><a href="#">This is a link</a></p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
              </div>
              </li>
              <li>
                <div class="card small">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="./brocoli1.jpg"/>
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">Brocoli<i class="material-icons right">Mas Info</i></span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Brocoli<i class="material-icons right">Cerrar</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
              </div>
              </li>
              </ul>

      
    </div>
      )  }
}

export default Products;