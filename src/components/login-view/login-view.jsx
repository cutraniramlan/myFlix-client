import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



      const handleSubmit = (event) => {
        event.preventDefault();
    
        const data = {
          Username: username,
          Password: password
        };
        const url = `https://movie-api-rani-1.herokuapp.com/login?Username=${username}&Password=${password}`;

    const requestOptions = {
      method: "POST",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("login response: ", data);
        if (data.user) {
          console.log("user", data.user);
          console.log("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user");
        }
      })
      .catch((e) => {
        alert("Something is ERRADO!");
      });
  };
    
        /* fetch("https://movie-api-rani-1.herokuapp.com/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        .then((response) => {
          if (response.ok) {
            onLoggedIn(username);
            var responseJSON = JSON.parse(response.text);
            responseJSON.

            localStorage.setItem("token",)
          } else {
            alert("Login failed");
          }
        });
      }; */

        
   /*      .then((response) => {
          if (response.ok) {
            alert("Signup successful");
            window.location.reload();
          } else {
            alert("Signup failed");
          }
        });
      }; */


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