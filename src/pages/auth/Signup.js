
import React, {useState} from "react";
import { Col, Row, Form, Card, Button, Image, Container, InputGroup, Nav, Tab } from '@themesberg/react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import { Routes } from "../../routes";
import SkyDiv from "../../components/SkyDiv";
import googlePlus from "../../assets/img/auth/google.png";
import cogoToast from 'cogo-toast';

const Signup = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();
  const freelancersignUp = async ()=>{
    try {
      if (username === "") {
        console.log("Please enter your username");
      }
      if (email === "") {
        console.log("Please enter your username");
      }
      if (password === "" && confirmPassword === "" && password !== confirmPassword) {
        console.log("Please enter Password and confirm Password, also confirm password does not match");
      }
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      // let data = {username, email, password, confirmPassword};
      var raw = JSON.stringify({
        "username": username,
        "email": email,
        "password": password,
        "confirmPassword": confirmPassword
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://16.171.150.73/api/v1/RegisterBuyer", requestOptions)
      .then(response => response.text())
      .then(async result => {
        let data = JSON.parse(result);
        console.log(data);
        if(data.success) {
            cogoToast.success(data.message,{
              position: 'top-right',
              hideAfter: 3,
            });
            history.push("/sign-in")
          }
          else{
            cogoToast.error(data.message,{
              position: 'top-right',
              hideAfter: 3,
            });
          }
        })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <main>
      <section className="section-header overflow-hidden bg-image text-white">
        <Container>
          <Row className="justify-content-center form-bg-image" >
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              {/* image area with welcome text */}
              <SkyDiv />
              {/* sign-up form  */}
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded-right border-light p-4 p-lg-5 h-100 w-100 fmxw-500">
              <Tab.Container defaultActiveKey="freelancer">
                  <Nav fill variant="pills" className="d-flex align-items-center justify-content-center">
                    <Nav.Item>
                      <Nav.Link eventKey="company" className="mb-sm-3 mb-md-0 company-btn">
                        Company
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="freelancer" className="mb-sm-3 mb-md-0 company-btn">
                        Freelancer
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="company" className="py-4">
                      <Form className="mt-4">
                        <Form.Group id="username" className="mb-4">
                          <Form.Label>User Name</Form.Label>
                          <InputGroup>
                            <Form.Control autoFocus required type="username" placeholder="User Name" className="input-field"/>
                          </InputGroup>
                        </Form.Group>
                        {/* <Form.Group id="company" className="mb-4">
                          <Form.Label>Company Name</Form.Label>
                          <InputGroup>
                            <Form.Control autoFocus required type="company" placeholder="Compnay Name" className="input-field"/>
                          </InputGroup>
                        </Form.Group> */}
                        <Form.Group id="email" className="mb-4">
                          <Form.Label>Email address</Form.Label>
                          <InputGroup>
                            <Form.Control autoFocus required type="email" placeholder="Email address" className="input-field"/>
                          </InputGroup>
                        </Form.Group>
                        <Form.Group id="password" className="mb-4">
                          <Form.Label>Your Password</Form.Label>
                          <InputGroup>
                            <Form.Control required type="password" placeholder="Password" className="input-field"/>
                          </InputGroup>
                        </Form.Group>
                        <Form.Group id="confirmPassword" className="mb-4">
                          <Form.Label>Confirm Password</Form.Label>
                          <InputGroup>
                            <Form.Control required type="password" placeholder="Confirm Password" className="input-field"/>
                          </InputGroup>
                        </Form.Group>
                        <p className="text-center text-sign">Or, sign in with your email</p>

                        <Button variant="outline-light" type="button" className="w-100 google-signIn">
                          <Image src={googlePlus} className="img-fluid" alt="Themesberg Logo" />
                          {/* <FontAwesomeIcon icon={faGooglePlusG} />   */}
                          <p>
                            Sign in with Google
                          </p>
                        </Button>
                        <p className="mb-4 mt-4 term-text">
                            By clicking “Create Account”, you agree to our Terms and that you have read our 
                            <Card.Link className="privacy-text">
                              &nbsp; Privacy Policy
                            </Card.Link>
                          </p>
                        <Button variant="info" type="submit" className="w-100 create-account">
                          Create an Account
                        </Button>
                      </Form>

                      <p className="mb-4 mt-4 already-text">
                          Have an account? &nbsp;
                          <Card.Link as={Link} to={Routes.Signin.path} className="sign-link">
                              Sign in
                          </Card.Link>
                        </p>

                    </Tab.Pane>
                    <Tab.Pane eventKey="freelancer" className="py-4">
                    <Form className="mt-4">
                        <Form.Group id="username" className="mb-4">
                          <Form.Label>User Name</Form.Label>
                          <InputGroup>
                            <Form.Control autoFocus required  type="text" value={username} onChange={(e)=>setName(e.target.value)} placeholder="User Name" className="input-field"/>
                          </InputGroup>
                        </Form.Group>
                        <Form.Group id="email" className="mb-4">
                          <Form.Label>Email address</Form.Label>
                          <InputGroup>
                            <Form.Control autoFocus required type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email address" className="input-field"/>
                          </InputGroup>
                        </Form.Group>
                        <Form.Group id="password" className="mb-4">
                          <Form.Label>Your Password</Form.Label>
                          <InputGroup>
                            <Form.Control required type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)} className="input-field"/>
                          </InputGroup>
                        </Form.Group>
                        <Form.Group id="confirmPassword" className="mb-4">
                          <Form.Label>Confirm Password</Form.Label>
                          <InputGroup>
                            <Form.Control required type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className="input-field"/>
                          </InputGroup>
                        </Form.Group>
                        <p className="text-center text-sign">Or, sign in with your email</p>

                        <Button variant="outline-light" type="button" className="w-100 google-signIn">
                          <Image src={googlePlus} className="img-fluid" alt="Themesberg Logo" />
                          {/* <FontAwesomeIcon icon={faGooglePlusG} />   */}
                          <p>
                            Sign in with Google
                          </p>
                        </Button>
                        <p className="mb-4 mt-4 term-text">
                            By clicking “Create Account”, you agree to our Terms and that you have read our 
                            <Card.Link  className="privacy-text">
                              &nbsp; Privacy Policy
                            </Card.Link>
                          </p>
                        <Button onClick={freelancersignUp} variant="info" type="submit" className="w-100 create-account">
                          Create an Account
                        </Button>
                      </Form>

                      <p className="mb-4 mt-4 already-text">
                          Have an account? &nbsp;
                          <Card.Link as={Link} to={Routes.Signin.path} className="sign-link">
                              Sign in
                          </Card.Link>
                        </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Signup;