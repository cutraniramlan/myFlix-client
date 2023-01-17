import React from 'react'

function UserInfo ( {username, email, birthday}) {
    return (
        <>
        <h4>Your Info</h4>
        <p>Name: {username}</p>
        <p>e-mail: {email}</p>
        </>
    );
    }

export default UserInfo;