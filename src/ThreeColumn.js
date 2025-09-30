import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function ThreeColumn() {
  const items = [
    {
      img: "https://images.freeimages.com/image/previews/a62/abstract-tech-digital-backdrop-5695994.jpg?fmt=webp&h=350.com/300",
      title: "Column One",
      text: "This is the first column description.",
    },
    {
      img: "https://images.freeimages.com/image/previews/b54/futuristic-girl-on-rocket-ship-5715990.jpg?fmt=webp&h=350",
      title: "Column Two",
      text: "This is the second column description.",
    },
    {
      img: "https://images.freeimages.com/image/previews/58a/galactic-rocket-launch-design-5696146.jpg?fmt=webp&h=350",
      title: "Column Three",
      text: "This is the third column description.",
    },
  ];

  return (
    <section id="three-column" className="py-5 bg-light">
      <Container>
        <Row>
          {items.map((item, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ThreeColumn;
