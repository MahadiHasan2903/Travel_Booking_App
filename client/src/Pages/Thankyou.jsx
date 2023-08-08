import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import animationData from "../assets/animation_lkmfz3o3.json";
import Lottie from "lottie-react";
import { Col, Container, Row } from "reactstrap";

const Thankyou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <div className="d-flex  align-items-center justify-content-center ">
              <div>
                <Lottie animationData={animationData} />
                <h5 className="text-center mb-14  ">
                  Your tour is booked successfully
                </h5>
                <br />
                <br />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Thankyou;
