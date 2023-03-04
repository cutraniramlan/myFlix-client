// import { Navbar, Container, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { setUser } from "../../redux/reducers/user";


// /* export const NavigationBar = ({ user, onLoggedOut }) => { */
// export const NavigationBar = () => {
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();


// return (
//     <Navbar className="navbar-brand" bg="white" expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/">
//           Disney Flix
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             {!user && (
//               <>
//                 <Nav.Link as={Link} to="/login">
//                   Login
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/signup">
//                   Signup
//                 </Nav.Link>
//               </>
//             )}
//             {user && (
//               <>
//                 <Nav.Link as={Link} to={`/user`}>
//                   {user.Username}
//                 </Nav.Link>
//                 <Nav.Link onClick={() => dispatch(setUser(null))}>
//                 Logout
//                 </Nav.Link>
//               </>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Logo from '/public/myflix-logo.png'

// import "./navbar.scss";

export const NavigationBar = ({ user, onLoggedOut }) => {
  console.log(user);
  return (
    <Navbar className="navbar-brand" bg="white">
      <Container>
        <Link to="/">
          <img src={Logo} height={65} className="pr-3" />
        </Link>
        <Navbar.Brand as={Link} to="/">
          MyFlix
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
