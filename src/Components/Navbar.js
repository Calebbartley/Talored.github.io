import React from 'react'
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
return (
    <>
       <Nav>
        <NavLogo to="/">
            Logo
        </NavLogo>
        <Bars />

        <NavMenu>
            <NavLink to="/" activeStyle>
                Home
            </NavLink>
            <NavLink to="/about" activeStyle>
                About
            </NavLink>
            <NavLink to="/contact" activeStyle>
                Contact
            </NavLink>
            <NavLink to="Portfolio" activeStyle>
                Portfolio
            </NavLink>
            <NavBtn>
                <NavBtnLink to="/sign-up">Subscribe</NavBtnLink>
            </NavBtn>
        </NavMenu> 
       </Nav> 
    </>
);
};
export default Navbar;