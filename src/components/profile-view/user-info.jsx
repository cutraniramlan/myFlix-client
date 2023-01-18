/* import React from 'react'

function UserInfo ( {username, email, birthday}) {
    return (
        <>
        <h4>Your Info</h4>
        <p>Name: {username}</p>
        <p>e-mail: {email}</p>
      
        </>
    );
    };

    
export default UserInfo; */

import { React } from "react";
import { Button } from "react-bootstrap";
import "./user-info.scss";

export const UserInfo = ({ username, email, birthday }) => {
  const token = localStorage.getItem("token");

  const handleDelete = (e) => {
    if (username && token) {
      let confirmDelete = confirm(
        "Are you sure you want to delete your account permanently?"
      );
      if (!confirmDelete) return;
      fetch(`https://movie-api-rani-1.herokuapp.com/users/${username}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      })
        // .then((response) => response.json())
        .then((response) => {
          if (response.ok) {
            alert("Your account was permanently deleted.");
            localStorage.clear();
            window.open("/", "_self");
          } else {
            alert(response.statusText);
          }
        })
        .catch((e) => {
          alert("Something is ERROR!");
        });
    }
  };

  return (
    <>
      <h4> Your Info</h4>
      <p>Name: {username}</p>
      <p>Email: {email}</p>
      <Button variant="outline-danger" onClick={handleDelete}>
        Delete Account
      </Button>
    </>
  );
};

export default UserInfo;