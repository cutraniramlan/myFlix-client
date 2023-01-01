// import { useState, useEffect } from "react";
// import { MovieCard } from "../movie-card/movie-card";
// import { MovieView } from "../movie-view/movie-view";
// import { LoginView } from "../login-view/login-view";
// import { SignupView } from "../signup-view/signup-view";
// import Container  from 'react-bootstrap/Container';
// import Row from "react-bootstrap/Row";


// export const MainView = () => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     const storedToken = localStorage.getItem("token");
//     const [user, setUser] = useState(storedUser? storedUser : null);
//     const [token, setToken] = useState(storedToken? storedToken : null);
//     const [movies, setMovies] = useState([]);
//     const [selectedMovie, setSelectedMovie] = useState(null);
  
  
//    useEffect(() => {
//      if (!token) return;
  
//      fetch("https://myflixmoviedb.herokuapp.com/movies", {
//        headers: { Authorization: `Bearer ${token}` },
//      })
//        .then((response) => response.json())
//        .then((movies) => {
//          setMovies(movies);
  
//        });
//    }, [token]);
  
//     // rest of the code

//   <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>

//   /* if (!user) {
//     return <LoginView onLoggedIn={(user) => setUser(user)} />;
//   } */

//   if (!user) {
//     return (
//       <>
//         <LoginView onLoggedIn={(user, token) => {
//           setUser(user);
//           setToken(token);
//         }} />
//         or
//         <SignupView />
//       </>
//     );
//   }

//    if (selectedMovie) {
//     return (
//       <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
//     );
//   }

//   if (movies.length === 0) {
//     return <div>The list is empty!</div>;
//   } 

//   if (data.user) {
//     localStorage.setItem("user", JSON.stringify(data.user));
//     localStorage.setItem("token", data.token);
//     onLoggedIn(data.user, data.token);
//   } else {
//     alert("No such user");
//   }

//   return (
//     <div>
//       {movies.map((movie) => (
//         <MovieCard
//           key={movie.id}
//           movie={movie}
//           onMovieClick={(newSelectedMovie) => {
//             setSelectedMovie(newSelectedMovie);
//           }}
//         />
//       ))}
//     </div>
//   );

//   return (
//     <Container style={{border: "1px solid red"}}>
//       <MainView />
//     </Container>
//   );
// }
import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { Row, Col } from "react-bootstrap";


export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=star+wars")
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.docs.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            image: `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
            author: doc.author_name?.[0]
          };
        });

        setMovies(moviesFromApi);
      });
  }, []);

  return (
    <Row className="justify-content-md-center">
      {!user ? (
        <Col md={5}>
          <LoginView onLoggedIn={(user) => setUser(user)} />
          or
          <SignupView />
        </Col>
      ) : selectedMovie ? (
        <Col md={8}>
          <MovieView
            movie={selectedMovie}
            onBackClick={() => setSelectedMovie(null)}
          />
        </Col>
      ) : movies.length === 0 ? (
        <div>The list is empty!</div>
      ) : (
        <>
          {movies.map((movie) => (
            <Col className="mb-4" key={movie.id} md={3}>
              <MovieCard
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                }}
              />
            </Col>
          ))}
        </>
      )}
    </Row>
  );
};