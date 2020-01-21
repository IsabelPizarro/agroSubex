import React from "react";

console.log("hola");

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav>
    <div class="nav-wrapper">
      {/* <a href="#" class="brand-logo">Logo</a> */}
      <ul id="nav-mobile" class="right ">
        <li><a href="sass.html">About</a></li>
        <li><a href="badges.html">Productos</a></li>
        <li><a href="collapsible.html">Contacto</a></li>
      </ul>
    </div>
  </nav>

</div>
      
    );
  }
}

export default Header;
