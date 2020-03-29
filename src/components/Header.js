import React from "react";
import { Link} from 'react-router-dom';
// import Form from "./Form";

console.log("hola");

class Header extends React.Component {
  

  
 
  render() {
    return (
        <header>
              <nav className="nav" id="myNav">
    
    <div class="nav-wrapper ">
     
      <a href="#" class="brand-logo">
     
      <h3 className="navTitle">agro<span className="navSubTitle">subex</span></h3> <div className="containerLogo"><img src="./favicon.png" alt="logo" className="logo" /></div></a> 
       
      <ul id="nav-mobile" class="right hide-on-med-and-down ">
        
        <li>
          Home
          </li>
        <li>
          <Link to="/Products">
          Productos </Link>
          </li>
        <li>
          <Link to="/Logistic">
          Logística
          </Link>
          </li>
          <li>
        <Link to="/Responsability"> Proveedores
          </Link>
          </li>  
      <li>
          <Link to="/Responsability"> Gestión de residuos
          </Link>
          </li>
          <li>
          <Link to="/Logistic">
          Agrosubex
          </Link>
          </li>     
        
        <li><Link to="/Form">
          Contacto
          </Link></li>
      </ul>
    </div>
  </nav>

  {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  </nav> */}
  
  


</header>

      
    );
  }
}

export default Header;
