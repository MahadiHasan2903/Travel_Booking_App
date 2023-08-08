import React from "react";
import "./Newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../../assets/tour-images/male-tourist.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter_content">
              <h2>Subscribe now to get useful traveling information.</h2>
              <div className="newsletter_input">
                <input type="email" placeholder="Enter your email" required />
                <button className="btn newsletter_btn">Subscribe</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                eos corrupti facere ex minima assumenda, dolor quam laborum
                tenetur.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter_img">
              <img src={maleTourist} alt="maleTourist" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
