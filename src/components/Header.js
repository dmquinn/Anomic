import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Logo from "../logo.svg";
import "../stylesheets/Header.css";

function Header() {
  return (
    window.location.href.indexOf("artistList") === -1 && (
      <div>
        <a href="/">
          <img src={Logo} alt="" className="logo" />
        </a>
        <header>
          <Navbar bg="light" variant="dark" expand="lg" className="navLinks">
            <Navbar.Brand href="/"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
              <Nav className="ml-auto">
                <Nav.Link href="/artists">Artists</Nav.Link>
                <Nav.Link href="/releases">Releases</Nav.Link>
                <Nav.Link href="/events">Upcoming</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/about">Shop</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </div>
    )
  );
}

export default Header;
