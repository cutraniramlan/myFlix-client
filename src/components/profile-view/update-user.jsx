import React from "react";
import { useState } from "react";
import { handleSubmit, handleUpdate } from "./profile-view";
import {
  Button,
  Form,
  Col,
  Row,
  Container,
  Card,
  CardGroup,
} from "react-bootstrap/";
import Form from "react-bootstrap/Form";

function UpdateUser({ handleSubmit, handleUpdate, user }) {
  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card bg="dark" text="light">
              <Card.Body>
                <Form
                  className="profile-form"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <Form.Group>
                    <h4>Want to update some info?</h4>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type="text"
                      name="Username"
                      defaultValue={user && user.Username}
                      placeholder="Type your new Username"
                      className="form-control"
                   
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      name="Password"
                      placeholder="Type your new Password"
                      className="form-control"
                    
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      name="Email"
                      defaultValue={user && user.Email}
                      placeholder="Type your Email"
                      className="form-control"
                  
                    />
                      </Form.Group>
                  <Form.Group>
                    <Form.Label>Birthday:</Form.Label>
                    <Form.Control
                      type="date"
                      name="Birthday"
                      defaultValue={user && user.Birthday}
                      className="form-control"
                  
                    />
                  </Form.Group>
                  <Card.Footer>
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn-primary"
                    >
                      Update
                    </Button>
                  </Card.Footer>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}
        <button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </button>

export default UpdateUser;