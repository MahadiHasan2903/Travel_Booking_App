import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { loginUser } from "../redux/action/userAction";
import { toast } from "react-toastify";
import "../styles/Login.css";
import loginImg from "../assets/tour-images/login.png";
import userImg from "../assets/tour-images/user.png";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = credentials;

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
      const response = await dispatch(loginUser(credentials));
      const { token, data } = response;

      localStorage.setItem("accessToken", token);
      localStorage.setItem("user", JSON.stringify(data)); // Store the entire user object

      toast.success("Login successful!");

      navigate("/");
    } catch (error) {
      toast.error("Invalid credentials. Please try again.");
      setCredentials({
        ...credentials,
        email: "",
        password: "",
      });
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
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Email"
                      required
                      id="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type={visible ? "text" : "password"}
                      placeholder="Password"
                      required
                      id="password"
                      value={password}
                      onChange={handleChange}
                    />
                    {visible ? (
                      <AiOutlineEye
                        className="visible_icon-login"
                        size={20}
                        onClick={() => setVisible(false)}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className="visible_icon-login"
                        size={20}
                        onClick={() => setVisible(true)}
                      />
                    )}
                  </FormGroup>
                  <Button className="btn register_btn auth_btn" type="submit">
                    Login
                  </Button>
                </Form>
                <p>
                  Don&apos;t have an account? <Link to="/register">SignUp</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
