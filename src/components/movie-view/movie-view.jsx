// import { useParams } from "react-router";
// import { Link } from "react-router-dom";
// import "./movie-view.scss";
// import { Button, Card, CardGroup, Row, Container } from "react-bootstrap";



// export const MovieView = () => {
//   const { movieId } = useParams();
//   const movies = useSelector((state) => state.movies);

//   console.log(movies); 

//   const movie = movies.find((b) => b.id === movieId);
//   const storedUser = JSON.parse(localStorage.getItem("user"));
//   const token = localStorage.getItem("token");
//   console.log(movie);

//   const addFavorite = (movieId) => {
//     if (!token) return;

//     const url = `https://movie-api-rani-1.herokuapp.com/users/${storedUser.Username}/movies/${movieId}`;

//     const requestOptions = {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };
//     fetch(url, requestOptions)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         localStorage.setItem("user",JSON.stringify(data));
//       })
//       .catch((e) => {
//         alert("Something is ERROR!");
//       });
//   };

//   return (
//     <Container className="cardset">
//       <Row>
//         <Card className="dh-100; card" bg="info" text="dark">
//           <Card.Header>
//             <div>
//               <span className="title text-center "> {movie.title} </span>
//             </div>
//             <Button
//               className="fav-btn"
//               size="sm"
//               variant="secondary"
//               onClick={addFavorite(movie.id)}
//             >
//               Add to Favorites
//             </Button>
//           </Card.Header>
//           <Card.Body>
//             <div>
//               <div>
//                 <Card.Img
//                   className="cardimage"
//                   crossOrigin="anonymous"
//                   src={movie.image}
//                 />
//               </div>
//               <div>
//                 <span className="labeltitle">Description: </span>
//                 <span className="description">{movie.description}</span>
//               </div>
//               <div>
//                 <span className="labeltitle">Genre: </span>
//                 <span className="description">{movie.genre.name}</span>
//               </div>
//               <div>
//                 <span className="labeltitle">Director: </span>
//                 <span className="description">{movie.director.name}</span>
//               </div>
//             </div>
//           </Card.Body>
//           <Card.Footer>
//             <Link to="/">
//               <Button className="btn-login"> Back </Button>
//             </Link>
//           </Card.Footer>
//         </Card>
//       </Row>
//     </Container>
//   );
// };

import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Row, Col, Button, Image } from "react-bootstrap";

import './movie-view.scss';

import { Link } from "react-router-dom";


export class MovieView extends React.Component {
  handleFavoriteMovie(e) {
    const { movie } = this.props;
    e.preventDefault();
    axios
      .post(
        `https://movie-api-rani-1.herokuapp.com/users/${localStorage.getItem(
          "user"
        )}/Movies/${movie._id}`,
        { username: localStorage.getItem("user") },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        alert(`${movie.Title} successfully added to your favorites`);
      })
      .then((res) => {
        document.location.reload(true);
      })
      .catch((error) => {
        alert(`${movie.Title} not added to your favorites` + error);
      });
  }
  render() {
    const { movie, onBackClick, handleFavorite } = this.props;

    return (
      <Row>
        <Col lg={8}>
          <div className="movie-view">
            <div className="movie-poster mt-3">
              <img src={movie.ImagePath} />
            </div>
            <div className="movie-title mt-2">
              <span className="label">Title: </span>
              <span className="value">{movie.Title}</span>
            </div>
            <div className="movie-description">
              <span className="label">Description: </span>
              <span className="value">{movie.Description}</span>
            </div>
            <div className="movie-director">
            <Link to={`/directors/${movie.Director.Name}`}>
              <Button variant="link">Director:</Button>
            </Link>
              <span className="value">{movie.Director.Name}</span>
            </div>
           

            <div className="movie-genre">
            <Link to={`/genres/${movie.Genre.Name}`}>
              <Button variant="link">Genre:</Button>
            </Link>
              <span className="value">{movie.Genre.Name}</span>
            </div>


        
          
        
            <Button
              className="back-button mb-3 btn-lg px-5"
              variant="outline-secondary"
              onClick={() => {
                onBackClick();
              }}
            >
              Back
            </Button>
            <Button
            className="favorite-button mb-3 btn-lg px-5"
            variant="outline-primary"
            value={movie._id}
            onClick={(e) => this.handleFavoriteMovie(e, movie)}
          >
            Add to your favorite Movies
          </Button>
          </div>
          
        </Col>
      </Row>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }).isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};