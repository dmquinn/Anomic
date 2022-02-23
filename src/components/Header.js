import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Logo from "../logo.svg";
import "../stylesheets/Header.css";
import ArtistsModal from "./ArtistsModal";

const Header = ({ setModal, modal }) => {
  return (
    <header>
      <a href="/">
        <img src={Logo} alt="" className="logo" />
      </a>
      <Navbar bg="light" variant="dark" expand="lg" className="navLinks">
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => setModal(true)}>Artists</Nav.Link>
            <Nav.Link href="/releases">Releases</Nav.Link>
            <Nav.Link href="/events">Upcoming</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <ArtistsModal modal={modal} setModal={setModal} />
    </header>
  );
};

export default Header;
