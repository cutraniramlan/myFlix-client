import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import {ProfileView} from "../profile-view/profile-view";
import { DirectorView } from "../director-view/director-view";
import { GenreView } from "../genre-view/genre-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { Navbar, Nav, Container, Row, Col, Button, Form } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";



export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [movies, setMovies] = useState([]);
  const [token, setToken] = useState(null);
  if (!storedUser && storedToken)
  {
    setUser(null);
    setToken(null);
    localStorage.clear();
  }
  //setUser(storedUser);
  const [searchString, setSearchString] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  console.log("storedToken0");
  console.log(storedToken);
  console.log(movies.length);
  console.log(user);

  useEffect(() => {
    console.log("storedToken");
    console.log(storedToken);
    if (!storedToken) return;
    fetch("https://movie-api-rani-1.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data");
        console.log(data);
        const moviesFromApi = data.map((item) => {
          var moviesToReturn = {
            id: item._id,
            description: item.description,
            image: item.ImagePath,
            title: item.title,
            genre: {
              name: item.genre.name,
              description: item.genre.description,
            },
            director: {
              name: item.director.name,
              bio: item.director.bio,
              birth: item.director.birth,
              death: item.director.death,
            },
          };
          return moviesToReturn;
        });
        setMovies(moviesFromApi);
        console.log(moviesFromApi);
      });
  }, [storedToken]);

  function movieSearch(searchString) {
    setFilteredMovies(
      movies.filter((movie) => movie.title.toLowerCase().includes(searchString))
    );
  }

  
  // Filter the list of movies by what was typed in the search bar
  //Check by Title, Director, and Genre
  useEffect(() => {
    if (searchString && searchString.length > 0) {
      const searchedMoviesData = movies.filter(
        (m) =>
          m.title.toLowerCase().includes(searchString.toLowerCase().trim()) ||
          m.genre.name.toLowerCase().includes(
            searchString.toLowerCase().trim()
          ) ||
          m.director.name.toLowerCase().includes(
            searchString.toLowerCase().trim()
          )
      );
      setFilteredMovies(searchedMoviesData);
    } else {
      setFilteredMovies([]);
    }
  }, [searchString]);



  return (
    <BrowserRouter>
     <NavigationBar className="justify-content-md-center" class="navbar-brand" href="#" src="https://placeholder.pics/svg/150x50/888888/EEE/Logo" alt="..." height="36"
        user={user}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
      />
      <Row >
    
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5} xs={12}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5} xs={12}>
                    <LoginView
                      onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                        localStorage.setItem("user",JSON.stringify(user));
                      }}
                    />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/movies/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8} xs={12}>
                    <MovieView movies={movies} />
                  </Col>
                )}
              </>
            }
          />

          {/* <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <>
                    {movies.map((movie) => (
                      <Col className="mb-4" key={movie.id} md={3}>
                        <MovieCard movie={movie} />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          /> */}
         <Route
            path="/user"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Col md={8}>
                    <ProfileView movies={movies} />
                  </Col>
                )}
              </>
            }
          />
           <Route
            path="/"
            element={
              <>
                <Row className="search-bar justify-content-end m-0 mt-3">
                  <Col md={3} className="mb-3">
                    <Form>
                      <Form.Control
                        type="text"
                        placeholder="Search by Title, Genre, or Director"
                        value={searchString}
                        onChange={(e) => setSearchString(e.target.value)}
                        className="bg-light shadow-sm"
                      />
                    </Form>
                  </Col>
                </Row>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The List is Empty!</Col>
                ) : (
                  <>
                    {filteredMovies && filteredMovies.length > 0
                      ? filteredMovies.map((movie) => (
                          <Col className="mb-4" key={movie.id} md={3}>
                            <MovieCard movie={movie} user={user} />
                          </Col>
                        ))
                      : movies.map((movie) => (
                          <Col className="mb-4" key={movie.id} md={3}>
                            <MovieCard movie={movie} user={user} />
                          </Col>
                        ))}
                  </>
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};

