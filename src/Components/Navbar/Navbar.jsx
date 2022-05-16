import React from "react";
import { Link } from "react-router-dom"
import { Navbar, Nav, Container } from "react-bootstrap"
import Cookies from "universal-cookie";
import "./style.css"
import logo from "../../assets/image/logo1.png"


const NavbarComp = () => {
    return(
        <div>
            <Navbar bg="light" expand="lg" className="navbar">
            <Container>
                <Navbar.Brand as={Link} to={"/"} ><img src={logo} alt="logo" className="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto navbar_menu">
                        <Nav.Link as={Link} to={"/"} >Home</Nav.Link>
                        <Nav.Link as={Link} to={"/package"}>Package</Nav.Link>
                        <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                        <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}
export default NavbarComp;