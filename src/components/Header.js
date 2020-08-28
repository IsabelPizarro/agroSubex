import React from "react";
import { Link} from 'react-router-dom';
import  { useState } from 'react';
import { Dropdown } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import Menu from "../images/menu-abierto.svg"

const Header = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => {

   
    setDropdownOpen(prevState => !prevState)
    ;}

const [isOpen, setIsOpen] = useState(false);
const six = (event) => {
  debugger;
  console.log(event.target)
  console.log("clicado");
}
  const tog = () =>{ 
    //true esta cerrado
    setIsOpen(!isOpen);}
  
    return (
    <header>
      <nav className="nav" id="myNav">
        <div class="nav-wrapper ">
          <a href="#" class="brand-logo">
          <h3 className="navTitle">agro<span className="navSubTitle">subex</span></h3> <div className="containerLogo hide-on-small-only"><img src="./favicon.png" alt="logo" className="logo" /></div></a> 
          <ul id="nav-mobile" class="right hide-on-med-and-down "> 
              <li>
                <a href="#"> 
                  Home
                  </a>
              </li>
              <li>
                <Link to="/Products">
                Productos </Link>
              </li>
              <li>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle  className="dropDown">
                  Ingeniería
                  </DropdownToggle>
                <DropdownMenu className="dropDown">
                <DropdownItem header className="dropDown">
                      <Link to="/design">
                      DISEÑO CONCEPTUAL - PROYECTO TECNICO
                      </Link>
                  </DropdownItem>
                  <DropdownItem header className="dropDown">
                  <Link to="/buildings">
                    DIRECCIÓN DE OBRAS  -  COORDINACION DE INSDUSTRIALES
                    </Link>
                    </DropdownItem>
                  <DropdownItem header className="dropDown">
                  <Link to="/vessels">TIPOS DE NAVES
                  </Link>
                  </DropdownItem>
                  <DropdownItem header className="dropDown" >
                  <Link to="/legal">
                  SERVICIOS TÉCNICOS - TRÁMITES LEGALES
                    </Link>
                    </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </li>
              <li>
                <Link to="/Logistic">
                Logística
                </Link>
              </li>
              <li>
                <Link to="/Responsability"> Gestión de residuos
                </Link>
              </li>
              <li>
              <Link to="/Agrosubex">
              Agrosubex
              </Link>
              </li>     
            
            <li><Link to="/Form">
              Contacto
              </Link></li>
          </ul>
          <NavbarToggler onClick={tog} className="right "> <img src={Menu} style={{width:25}} className="pt-3 mx-3"/></NavbarToggler>
        </div>


        <Collapse isOpen={isOpen}  navbar>
         
          <Nav className="mr-auto px-5 sobreponer" id="" navbar >
              <NavItem onClick={tog}>
                <a href="#"> 
                  Home
                  </a>
              </NavItem>
              <NavItem onClick={tog}>
                <Link to="/Products">
                Productos </Link>
              </NavItem>

              <NavItem>
              <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                <DropdownToggle  className="dropDown" >
                  Ingeniería
                  </DropdownToggle >
                <DropdownMenu className="dropDown"  >
                <DropdownItem header className="dropDown"  isOpen={dropdownOpen} toggle={toggle} >
                      <Link to="/design">
                      DISEÑO CONCEPTUAL - PROYECTO TECNICO
                      </Link>
                  </DropdownItem>

                  <DropdownItem header className="dropDown" onClick={tog}>
                      <Link to="/buildings">
                        DIRECCIÓN DE OBRAS  -  COORDINACION DE INSDUSTRIALES
                        </Link>
                    </DropdownItem>
                  <DropdownItem header className="dropDown" onClick={tog}>
                  <Link to="/vessels">TIPOS DE NAVES
                  </Link>
                  </DropdownItem>
                  <DropdownItem header className="dropDown" onClick={console.log("click")}>
                  <Link to="/legal">
                  SERVICIOS TÉCNICOS - TRÁMITES LEGALES
                    </Link>
                    </DropdownItem>
                </DropdownMenu>

              </Dropdown>

              </NavItem>
              <NavItem onClick={tog}>
                <Link to="/Logistic">
                Logística
                </Link>
              </NavItem>
              <NavItem onClick={tog}>
                <Link to="/Responsability"> Proveedores
                </Link>
              </NavItem>  
              <NavItem onClick={tog}>
                <Link to="/Responsability"> Gestión de residuos
                </Link>
              </NavItem>
              <NavItem onClick={tog}>
              <Link to="/agrosubex">
              Agrosubex
              </Link>
              </NavItem>     
            <NavItem onClick={tog}>
              <Link to="/Form">
              Contacto
              </Link></NavItem>
          </Nav>
        </Collapse>
      </nav>
    </header>

      
    );
}

export default Header;
