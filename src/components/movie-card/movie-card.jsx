import React from "react";
// Here you import the PropTypes library
import PropTypes from "prop-types";
import { Button, Card, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./movie-card.scss";

export const MovieCard = ({ movie, onMovieClick, moviesFromApi }) => {
  console.log(movie);
  return (
    <Container>
      <Col>
        <Card className="dh-100; card" bg="dark" text="light">
          <Card.Img variant="top" src={movie.image} />
           <Card.Body>
             <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.director.name}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
              <Button className="btn-login">See Detail</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    </Container>
  );
};

// Here is where we define all the props constraints for the MovieCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    director: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    genre: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};