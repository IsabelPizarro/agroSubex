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
  {/* BOOSTrap */}
  <div class="card-group">
  <div class="card">
    <img src="./pulpa-de-remolacha-azucarera.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      {/* <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      
    </div>
  </div>
  <div class="card">
    <img src="./brocoli1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Brocoli</h5>
      {/* <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
      
      
    </div>
  </div>
  <div class="card">
    <img src="./cascarilla-de-cacao.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
    </div>
  </div>
</div>
            <p>
            Loren ipsum
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
    

      
    );
  }
}

export default Products;