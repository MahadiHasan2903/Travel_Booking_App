import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import loginImg from "../assets/tour-images/login.png";
import userImg from "../assets/tour-images/user.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { registerUser } from "../redux/action/userAction";

const Register = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await dispatch(registerUser(credentials));
      setCredentials({
        username: "",
        email: "",
        password: "",
      });
      navigate("/login");
    } catch (error) {
      // No need to handle anything here, as the action already handles it
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login_container d-flex justify-content-between">
              <div className="login_img">
                <img src={loginImg} alt="loginImg" />
              </div>

              <div className="login_form">
                <div className="user">
                  <img src={userImg} alt="userImg" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      required
                      id="username"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type={visible ? "text" : "password"}
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                    {visible ? (
                      <AiOutlineEye
                        className="visible_icon-register"
                        size={20}
                        onClick={() => setVisible(false)}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className="visible_icon-register"
                        size={20}
                        onClick={() => setVisible(true)}
                      />
                    )}
                  </FormGroup>
                  <Button className="btn register_btn auth_btn" type="submit">
                    Register
                  </Button>
                </Form>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
