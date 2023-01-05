import React from "react";

function UpdateUser({ handleSubmit, handleUpdate }) {
  return (
    <div>
      <h4>Update</h4>
      <form>
        <Form.Group>
          <Form.label>Username</Form.label>
          <Form.Control
            type="text"
            defaultValue={user.Username}
            onChange={(e) => handleUpdate(e)}
            required
            placeholder="Enter a username"
          />
        </Form.Group>

        <Form.Group>
          <Form.label>Password</Form.label>
          <Form.Control
            type="text"
            name="Password"
            defaultValue=""
            onChange={(e) => handleUpdate(e)}
            required
            minLength="8"
            placeholder="You Password must be 8 or more characters"
          />
        </Form.Group>

        <Form.Group>
          <Form.label>Email</Form.label>
          <Form.Control
            type="email"
            defaultValue={user.Email}
            onChange={(e) => handleUpdate(e)}
            required
            placeholder="Enter your email address"
          />
        </Form.Group>

        <button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
