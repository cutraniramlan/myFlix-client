// import{ useState } from "react";

// import { Button, Form, Col, Row, Container, Card, CardGroup } from "react-bootstrap/";

// export const SignupView = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [birthday, setBirthday] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const data = {
//       Username: username,
//       Password: password,
//       Email: email,
//       Birthday: birthday,
//     };

//     fetch("https://movie-api-rani-1.herokuapp.com/users", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//     })
//     .then ((response) => response.json())
//     .then((data) => {
//         alert('SignUp success:', data);
//         console.log(data);
//       /*   localStorage.setItem("user",JSON.stringify(data)); */
//         window.open(`/login`, "_self");
        
//     })
//     .catch ((error) => {
//       alert('SignUp error:', error);

//     });

//   };


//       return (
//         <Container className="formset">
//         <Row>
//           <Col>
//             <CardGroup>
//               <Card bg="dark" text="light">
//                 <Card.Body>
//                   <Card.Title> Welcome!</Card.Title>
//                   <Form onSubmit={handleSubmit}>
//                     <Form.Group
//                       className="description"
//                       controlId="signUpFormUsername"
//                     >
//                       <Form.Label className="label">Username:</Form.Label>
//                       <Form.Control
//                         className="formctrl"
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                         minLength="3"
//                         placeholder="Enter your Username"
//                       />
//                     </Form.Group>

//                     <Form.Group
//                       className="description"
//                       controlId="signUpFormPassword"
//                     >
//                       <Form.Label className="label">Password:</Form.Label>
//                       <Form.Control
//                         className="formctrl"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         placeholder="Type your Password"
//                       />
//                     </Form.Group>
//                     <Form.Group
//                       className="description"
//                       controlId="signUpFormEmail"
//                     >
//                       <Form.Label className="label">Email:</Form.Label>
//                       <Form.Control
//                         className="formctrl"
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                         placeholder="Type your Email"
//                       />
//                     </Form.Group>
//                     <Form.Group
//                       className="description"
//                       controlId="signUpFormBirthday"
//                     >
//                       <Form.Label className="label">Birthday:</Form.Label>
//                       <Form.Control
//                         className="formctrl"
//                         type="date"
//                         value={birthday}
//                         onChange={(e) => setBirthday(e.target.value)}
//                         required
//                       />
//                     </Form.Group>
//                     <Card.Footer>
//                       <Button
//                         variant="primary"
//                         type="submit"
//                         className="btn-login"
//                       >
//                         Register
//                       </Button>
//                     </Card.Footer>
//                   </Form>
//                 </Card.Body>
//               </Card>
//             </CardGroup>
//           </Col>
//         </Row>
//       </Container>
//       );
// };

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Form, Button, Card, CardGroup, Container, Col, Row, } from "react-bootstrap";

import './registration-view.scss';

export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const validate = () => {
    let isReq = true;
    if (!username) {
      setUsernameErr("Username Required");
      isReq = false;
    } else if (username.length < 2) {
      setUsernameErr("Username must be 2 characters long");
      isReq = false;
    }
    if (!password) {
      setPasswordErr("Password Required");
      isReq = false;
    } else if (password.length < 6) {
      setPasswordErr("Password must be 6 characters long");
      isReq = false;
    }
    if (!email) {
      setEmailErr("Email Required");
      isReq = false;
    } else if (email.indexOf("@") === -1) {
      setEmailErr("Email is invalid");
      isReq = false;
    }

    return isReq;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(username, password, email, birthday);
   // props.Registration(username);
   const isReq = validate();
   if (isReq) {
     axios
       .post("https://movie-api-rani-1.herokuapp.com/users", {
         Username: username,
         Password: password,
         Email: email,
         Birthday: birthday,
       })
       .then((response) => {
         const data = response.data;
         console.log(data);
         alert("Registration successful, please login!");
         window.open("/", "_self"); //the second argument '_self' makes the page open in the current tab
       })
       .catch((response) => {
         console.error(response);
         alert("unable to register");
       });
   }
  };
  return (
    <Container className="register-container">
      <Row className="justify-content-md-center mt-5">
        <Col md={5}>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title className="text-center" as="h4">
                  Please Register
                </Card.Title>
                <Form>
                  <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      //required
                      placeholder="Enter a username"
                    />
                     {usernameErr && <p>{usernameErr}</p>}
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      //required
                      minLength="8"
                      placeholder="Must be 8 or more characters"
                    />
                    {passwordErr && <p>{passwordErr}</p>}
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      //required
                      placeholder="Enter your email address"
                    />
                     {emailErr && <p>{emailErr}</p>}
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Birthday:</Form.Label>
                    <Form.Control
                      type="date"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                      placeholder="Enter your birthday"
                    />
                  </Form.Group>

                  <Button
                    className="sign-up-button mt-2 mr-2"
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                  >Register
                  </Button>
                  <Button 
                  className="back-button mt-2"
                  variant="secondary"
                  type="submit"
                  onClick={() => { onBackClick(null); }}>Back to the Login Page</Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

RegistrationView.propTypes = {register: PropTypes.shape({
  Username: PropTypes.string.isRequired,
  Password: PropTypes.string.isRequired,
  Email: PropTypes.string.isRequired,
}),
};