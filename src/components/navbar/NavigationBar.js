import React from "react";
import './NavigationBar.css';
import { Navbar, Nav, Offcanvas, Container} from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar expand="lg" sticky='top' className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="/" id='logo'>SHAMSUL <br /> ALAM</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
          <Offcanvas.Header closeButton>
            {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">ETUSIYV</Nav.Link>
              <Nav.Link href="/about">MINUSTA</Nav.Link>
              <Nav.Link href="/">MIDIALLE</Nav.Link>
              <Nav.Link href="/contact">OTA YHTEYTTA</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
