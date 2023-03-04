// import React from "react";
// import { useSelector} from "react-redux";
// import { MovieCard } from "../movie-card/movie-card";
// import { MoviesFilter } from "../movies-filter/movies-filter";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

// export const MoviesList = () => {
// const movies = useSelector((state) => state.movies.list);
// const filter = useSelector((state) => state.movies.filter)
// .trim()
// .toLowerCase();

// const filteredMovies = movies.filter((movie) =>
// movie.title.toLowerCase().includes(filter)
// );

// return (
//     <>
//             <Row>
//                 <MoviesFilter />
//             </Row>
//             <Row>
//                 {movies.length === 0 ? (
//             <Col>The list is empty!</Col>
//             ) : (
//                 filteredMovies.map((movie) =>
//                 (
//                     <Col className="mb-4" key={movie.id} md={3}>
//                     <MovieCard movie={movie} />
//                     </Col>
//                 ))
//             )}
//             </Row>
//         </>
//     );
// };
    

import React from 'react';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';

import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
import { MovieCard } from '../movie-card/movie-card';

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MoviesList(props) {
  const { movies, visibilityFilter } = props;
  let filteredMovies = movies;

  if (visibilityFilter !== '') {
    filteredMovies = movies.filter(m => m.Title.toLowerCase().includes(visibilityFilter.toLowerCase()));
  }

  if (!movies) return <div className="main-view"/>;

  return <>
    <Col md={12} style={{ margin: '1em' }}>
      <VisibilityFilterInput visibilityFilter={visibilityFilter} />
    </Col>
    {filteredMovies.map(m => (
      <Col md={3} key={m._id}>
        <MovieCard movie={m} />
      </Col>
    ))}
  </>;
}

export default connect(mapStateToProps)(MoviesList);

