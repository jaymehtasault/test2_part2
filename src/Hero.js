import React from "react";
import { Container } from "react-bootstrap";

function Hero() {
  return (
    <section
      id="hero"
      className="d-flex align-items-center justify-content-center hero-section"
    >
      <Container className="text-center text-black">
        <h1>Welcome to My Website</h1>
        <p>This is a hero section with a background image.</p>
      </Container>
    </section>
  );
}

export default Hero;
