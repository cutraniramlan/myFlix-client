import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Card} from 'react-bootstrap'; 
import './profile-view.scss';
import axios from "axios";
import UserInfo from './user-info';
import favoriteMovies from './favorite-movies'; 
export function Profilview ({ movies, onUpdateUserInfo}) {

} 

return {

    <Container>
    <Row>
    <Col xs={12} sm={4}>
    <Card>
    <Card.Body>
    <UserInfo name=(user.Username) email=(user.Email)  />
    </Card.Body>
    </Card>
    
    
    </Col>
    <Col xs={12} sm={8 }></Col>
    <Card>
    <Card.Body>
     <UpdateUser user=(user) setUser=(setUser)
    </Card.Body>
    </Card>

    </Row>
    </Container>

/*     <favoriteMovie favoriteMovieList={favoriteMovieList}/>  
    <UpdateUser handleSubmit={handleSubmit} handleUpdate=(handleUpdate) /> */