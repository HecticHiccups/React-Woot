import React from "react";
import AppNavBar from "../layout/AppNavBar";
import { Container, Row, Col } from "reactstrap";
import "./About.css";

function About() {
  return (
    <div>
      <AppNavBar />
      <Container className="About">
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Container className="content">
              <h1>Our Story</h1>
              <hr />
              <p className="text-left">A message from the weebs:</p>
              <p>
                w00t, is more than just a brand; It's an emotion a feeling of
                joy, excitement.
              </p>
              <p>
                It started out with a desire to create my own streetwear brand.
                I started investing a lot of time in determining how I would
                form my brand, what it would stand for, who is my target
                demographic and what the ideal customer would be. As I
                progressed things started to come together.
              </p>
              <p>
                I took a lot of inspiration from different brands that started
                out, and have flourished. In turn, I realized that I need my
                brand to stand out more that it needed to be true to me. After
                several moments of introspection, it came to me. I wanted to
                build a brand for people who share my interests. Skaters,
                Gamers, Anime Lovers, Language I wanted to reach these people...
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
