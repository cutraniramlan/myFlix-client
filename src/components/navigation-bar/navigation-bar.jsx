import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import "./navigation-bar.scss";

export const NavigationBar = ({ user, onLoggedOut }) => {
  console.log(user);
  return (
    <Navbar className="navbar-brand" bg="white">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Disney Flix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link} to={`/user`}>
                  {user.Username}
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
