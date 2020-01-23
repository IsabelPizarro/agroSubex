import React from "react";
import { Link} from 'react-router-dom';
// import Form from "./Form";

console.log("hola");

class Header extends React.Component {
  render() {
    return (
      
        <header>
              <nav>
    <div class="nav-wrapper">
    
      
      <ul id="nav-mobile" class="right ">
        <li><a href="sass.html">Agrosubex</a></li>
        <li><a href="badges.html">Productos</a></li>
        <li><a href="collapsible.html">Gestión de residuos</a></li>
        
        <li><a href="collapsible.html">Logística</a></li>
      
        
                
              
        
        <li><Link to="/Form">
          Contacto
          </Link></li>
        
      
      </ul>
    </div>
  </nav>
  
  


</header>

      
    );
  }
}

export default Header;
