import React from "react";
import "./Footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/tour-images/logo.png";
import {
  BsFacebook,
  BsFillTelephoneFill,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { BiSolidMap } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
const quick_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick_links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              {" "}
              <img src={logo} alt="logo" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti, sed.
              </p>
              <div className="social_links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <BsYoutube />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <BsFacebook />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <BsInstagram />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <BsTwitter />
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer_link-title">Discover</h5>
            <ListGroup className="footer_quick-links">
              {quick_links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer_link-title">Quick Links</h5>
            <ListGroup className="footer_quick-links">
              {quick_links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer_link-title">Quick Links</h5>
            <ListGroup className="footer_quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <BiSolidMap />
                  </span>
                  Address:
                </h6>
                <p className="mb-0">Dhaka, Bangladesh</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <FaEnvelope />
                  </span>
                  Email:
                </h6>
                <p className="mb-0">12mahadihasan@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <BsFillTelephoneFill />
                  </span>
                  Phone:
                </h6>
                <p className="mb-0">+880 1704672028</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              Copyright {year}, design and develop by{" "}
              <span className="copyright_name">Md. Mahadi Hasan</span>. All
              rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
