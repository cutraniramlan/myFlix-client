import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button, Card, CardGroup, Row, Container } from "react-bootstrap";


export const MovieView = ({ movies}) => {

  console.log(movies);

  const { movieId } = useParams();

  const movie = movies.find((b) => b.id === movieId);
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  console.log(movie);

  const addFavorite = (movieId) => {
    if (!token) return;

    const url = `https://movie-api-rani-1.herokuapp.com/users/${storedUser.Username}/movies/${movieId}`;

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("user",JSON.stringify(data));
      })
      .catch((e) => {
        alert("Something is ERROR!");
      });
  };

  return (
    <Container className="cardset">
      <Row>
        <Card className="dh-100; card" bg="info" text="dark">
          <Card.Header>
            <div>
              <span className="title text-center "> {movie.title} </span>
            </div>
            <Button
              className="fav-btn"
              size="sm"
              variant="secondary"
              onClick={addFavorite(movie.id)}
            >
              Add to Favorites
            </Button>
          </Card.Header>
          <Card.Body>
            <div>
              <div>
                <Card.Img
                  className="cardimage"
                  crossOrigin="anonymous"
                  src={movie.image}
                />
              </div>
              <div>
                <span className="labeltitle">Description: </span>
                <span className="description">{movie.description}</span>
              </div>
              <div>
                <span className="labeltitle">Genre: </span>
                <span className="description">{movie.genre.name}</span>
              </div>
              <div>
                <span className="labeltitle">Director: </span>
                <span className="description">{movie.director.name}</span>
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <Link to="/">
              <Button className="btn-login"> Back </Button>
            </Link>
          </Card.Footer>
        </Card>
      </Row>
    </Container>
  );
};