import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button, Modal } from "react-bootstrap";
import Hero from "./Hero";
import ThreeColumn from "./ThreeColumn";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#">Jay Mehta</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#hero">Hero Section</Nav.Link>
              <Nav.Link href="#three-column">Three Column</Nav.Link>
              <Button
                className="custom-btn ms-2"
                onClick={() => setShowModal(true)}
              >
                Copyright
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sections */}
      <Hero />
      <ThreeColumn />

      {/* Footer */}
      <Footer />

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Copyright Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>© 2025 Your Name. All Rights Reserved.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
