import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements.js";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
            <NavLink to="/" activeStyle>
                Home
            </NavLink>
            <NavLink to="/about" activeStyle>
                About
            </NavLink>
            <NavLink to="/projects" activeStyle>
                Projects
            </NavLink>
            <NavLink to="/coursework" activeStyle>
                Coursework
            </NavLink>
            <NavLink to="/todo" activeStyle>
                To-Do List
            </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;