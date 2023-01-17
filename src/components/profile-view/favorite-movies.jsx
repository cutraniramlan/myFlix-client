import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Figure, Card, Container } from "react-bootstrap";

export const FavoriteMovies = ({ favoriteMovieList }) => {
  const token = localStorage.getItem("token");
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const removeFav = (movieId) => {
    fetch(
      `https://movie-api-rani-1.herokuapp.com/users/${storedUser.Username}/movies/${movieId}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          localStorage.setItem("user", JSON.stringify(data));
          window.open(`/user`, "_self");
        }
      })
      .catch((e) => {
        alert("Something is ERROR!");
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card bg="dark" text="light">
            <Card.Body>
              <Col xs={12}>
                <Card.Title className="favtitle">
                  Favorite Movies
                </Card.Title>
              </Col>
              <Row>
                {favoriteMovieList.map((movie) => {
                  return (
                    <Col
                      xs={12}
                      md={6}
                      lg={3}
                      key={movie.id}
                      className="fav-movie"
                    >
                      <Card bg="dark" text="light">
                        <Figure>
                          <Link to={`/movies/${movie.id}`}>
                            <Figure.Image
                              crossOrigin="anonymous"
                              src={movie.image}
                              alt={movie.title}
                            />
                            <Figure.Caption>{movie.title}</Figure.Caption>
                          </Link>
                        </Figure>
                        <Card.Footer>
                          <Button
                            className="btn-remove"
                            variant="secondary"
                            onClick={() => removeFav(movie.id)}
                          >
                            Remove
                          </Button>
                        </Card.Footer>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FavoriteMovies;
