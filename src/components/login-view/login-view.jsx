import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/user";


export const LoginView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();



      const handleSubmit = (event) => {
        event.preventDefault();
    
        const data = {
          Username: username,
          Password: password
        };

  
        const url = `https://movie-api-rani-1.herokuapp.com/login?Username=${username}&Password=${password}`;

        const requestOptions = {
          method: "POST",
          body: JSON.stringify(data)

        };

        fetch(url, requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log("login response: ", data);
            console.log(data.user);
            if (data.user) {
              console.log("user", data.user);
              console.log("token", data.token);
              console.log(username);
              // localStorage.setItem("user", JSON.stringify(data.user));
              // localStorage.setItem("token", data.token);
              // onLoggedIn(data.user, data.token);
              dispatch(setUser(username));
            } else {
              alert("No such user");
            }
          })
          .catch((e) => {
            alert("Something is ERROR!");
            console.log(e);
          });
      };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="3" 
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};