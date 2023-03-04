import { useEffect } from "react";
import { useState } from "react";
import { MoviesList } from "../movies-list/movies-list";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setMovies } from "../../redux/reducers/movies";



export const MainView = () => {
  const movies = useSelector((state) => state.movies.list);
  const user = useSelector((state) => state.user);
  const setUser = useState(null);
  const dispatch = useDispatch();
  // const storedUser = JSON.parse(localStorage.getItem("user"));
  // const storedToken = localStorage.getItem("token");
  // const setUser = useState(storedUser ? storedUser : null);
  // const setMovies = useState([]);
  // const [token, setToken] = useState(null);
  // //setUser(storedUser);

  // console.log("storedToken0");
  // console.log(storedToken);
  // console.log(movies.length);
  // console.log(user);

  useEffect(() => {
    // console.log("storedToken");
    // console.log(storedToken);
    // if (!storedToken) return;
    fetch("https://movie-api-rani-1.herokuapp.com/movies"/* , {
      headers: { Authorization: `Bearer ${storedToken}` }, */
    )
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
        
        dispatch(setMovies(moviesFromApi));
        console.log(moviesFromApi);
      });
  }, /* [storedToken] */);


  return (
    <BrowserRouter>
     <NavigationBar 
      /*    user={user}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear(); 
        }} */
      />
      <Row className="justify-content-md-center" class="navbar-brand">
    
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
                  <Navigate to="/" replace />
                ) : (
                  <Col md={5} xs={12}>
                    <LoginView
                     /*  onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                        localStorage.setItem("user",JSON.stringify(user));
                      }} */
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
                    <MovieView /* movies={movies} */ />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/"
            element={
              <>{!user ? <Navigate to="/login" replace /> :
                <MoviesList />
                }
                </>
                }
                />
         <Route
            path="/user"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Col md={8}>
                    <ProfileView /* movies={movies} */ />
                  </Col>
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};