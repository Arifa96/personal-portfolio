import React from "react";
import './NavigationBar.css';
import { Navbar, Nav, Offcanvas, Container} from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar expand="lg" fixed='top' className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="#" id='logo'>JUSSI <br /> SARAMO</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
          <Offcanvas.Header closeButton>
            {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">ETUSIYV</Nav.Link>
              <Nav.Link href="#action2">JUSSI</Nav.Link>
              <Nav.Link href="#action2">MIDIALLE</Nav.Link>
              <Nav.Link href="#action2">OTA YHTEYTTA</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
