// import { useEffect } from "react";
// import { useState } from "react";
// import { MoviesList } from "../movies-list/movies-list";
// import { MovieView } from "../movie-view/movie-view";
// import { LoginView } from "../login-view/login-view";
// import { SignupView } from "../signup-view/signup-view";
// import { NavigationBar } from "../navigation-bar/navigation-bar";
// import { ProfileView } from "../profile-view/profile-view";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import { useSelector, useDispatch } from "react-redux";
// import { setMovies } from "../../redux/reducers/movies";



// export const MainView = () => {
//   const movies = useSelector((state) => state.movies.list);
//   const user = useSelector((state) => state.user);
//   const setUser = useState(null);
//   const dispatch = useDispatch();
//   // const storedUser = JSON.parse(localStorage.getItem("user"));
//   // const storedToken = localStorage.getItem("token");
//   // const setUser = useState(storedUser ? storedUser : null);
//   // const setMovies = useState([]);
//   // const [token, setToken] = useState(null);
//   // //setUser(storedUser);

//   // console.log("storedToken0");
//   // console.log(storedToken);
//   // console.log(movies.length);
//   // console.log(user);

//   useEffect(() => {
//     // console.log("storedToken");
//     // console.log(storedToken);
//     // if (!storedToken) return;
//     fetch("https://movie-api-rani-1.herokuapp.com/movies"/* , {
//       headers: { Authorization: `Bearer ${storedToken}` }, */
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("data");
//         console.log(data);
//         const moviesFromApi = data.map((item) => {
//           var moviesToReturn = {
//             id: item._id,
//             description: item.description,
//             image: item.ImagePath,
//             title: item.title,
//             genre: {
//               name: item.genre.name,
//               description: item.genre.description,
//             },
//             director: {
//               name: item.director.name,
//               bio: item.director.bio,
//               birth: item.director.birth,
//               death: item.director.death,
//             },
//           };
//           return moviesToReturn;
//         });
        
//         dispatch(setMovies(moviesFromApi));
//         console.log(moviesFromApi);
//       });
//   }, /* [storedToken] */);


//   return (
//     <BrowserRouter>
//      <NavigationBar 
//       /*    user={user}
//         onLoggedOut={() => {
//           setUser(null);
//           setToken(null);
//           localStorage.clear(); 
//         }} */
//       />
//       <Row className="justify-content-md-center" class="navbar-brand">
    
//         <Routes>
//           <Route
//             path="/signup"
//             element={
//               <>
//                 {user ? (
//                   <Navigate to="/" />
//                 ) : (
//                   <Col md={5} xs={12}>
//                     <SignupView />
//                   </Col>
//                 )}
//               </>
//             }
//           />
//           <Route
//             path="/login"
//             element={
//               <>
//                 {user ? (
//                   <Navigate to="/" replace />
//                 ) : (
//                   <Col md={5} xs={12}>
//                     <LoginView
//                      /*  onLoggedIn={(user, token) => {
//                         setUser(user);
//                         setToken(token);
//                         localStorage.setItem("user",JSON.stringify(user));
//                       }} */
//                     />
//                   </Col>
//                 )}
//               </>
//             }
//           />

//           <Route
//             path="/movies/:movieId"
//             element={
//               <>
//                 {!user ? (
//                   <Navigate to="/login" replace />
//                 ) : movies.length === 0 ? (
//                   <Col>The list is empty!</Col>
//                 ) : (
//                   <Col md={8} xs={12}>
//                     <MovieView /* movies={movies} */ />
//                   </Col>
//                 )}
//               </>
//             }
//           />

//           <Route
//             path="/"
//             element={
//               <>{!user ? <Navigate to="/login" replace /> :
//                 <MoviesList />
//                 }
//                 </>
//                 }
//                 />
//          <Route
//             path="/user"
//             element={
//               <>
//                 {!user ? (
//                   <Navigate to="/login" replace />
//                 ) : (
//                   <Col md={8}>
//                     <ProfileView /* movies={movies} */ />
//                   </Col>
//                 )}
//               </>
//             }
//           />
//         </Routes>
//       </Row>
//     </BrowserRouter>
//   );
// };

import React from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from 'react-redux';


import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from "../movie-view/movie-view";
import { Navbar } from "../navbar/navbar";
import { DirectorView } from "../director-view/director-view";
import { GenreView } from "../genre-view/genre-view";
import { ProfileView } from "../profile-view/profile-view";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



import './main-view.scss';

// #0
import { setMovies } from '../../actions/actions';

// we haven't written this one yet
import MoviesList from '../movies-list/movies-list';
/* 
  #1 The rest of components import statements but without the MovieCard's 
  because it will be imported and used in the MoviesList component rather
  than in here. 
*/

// #2 export keyword removed from here
class MainView extends React.Component {

  constructor() {
    super();

    // #3 movies state removed from here
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user"),
      });
      this.getMovies(accessToken);
    }
  }

  getMovies(token) {
    axios
      .get("https://movie-api-rani-1.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
         // #4
         this.props.setMovies(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    

/* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/

onLoggedIn(authData) {
  console.log(authData);
  this.setState({
    user: authData.user.Username
  });

  localStorage.setItem('token', authData.token);
  localStorage.setItem('user', authData.user.Username);
  this.getMovies(authData.token);
}

onLoggedOut() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  this.setState({
    user: null
  });
}

toRegister(registered) {
  this.setState({
    registered,
  });
}


render() {

  // #5 movies is extracted from this.props rather than from the this.state
  let { movies } = this.props;
  let { user } = this.state;

  return (
    <Router>
       <Navbar user={user} />
      <Row className="main-view justify-content-md-center">
        <Route exact path="/" render={() => {
          if (!user) return <Col>
            <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
          </Col>
          if (movies.length === 0) return <div className="main-view" />;
          // #6
          return <MoviesList movies={movies}/>;
        }} />
     
        <Route
          path="/register"
          render={() => {
            if (user) return <Redirect to="/" />;
            return (
              <Col>
                <RegistrationView />
              </Col>
            );
          }}
        />

        {/* route for link on main-view to profile-view */}

        <Route
            path={`/users/${user}`}
            render={({ history }) => {
              if (!user) return <Redirect to="/" />;
              return (
                <Col>
                  <ProfileView 
                  user={user} 
                  goBack={history.goBack} 
                  //favoriteMovies={favoriteMovies || []} 
                  //handleFavorite={this.handleFavorite} 
                  onBackClick={() => history.goBack()} 
                  movies={movies} />
                </Col>
              );
            }}
          />

          <Route
            path={`/user-update/:username`}
            render={({ match, history }) => {
              if (!user) return <Redirect to="/" />;
              return (
                <Col>
                  <UserUpdate
                    user={user}
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />


        <Route
          path="/movies/:movieId"
          render={({ match, history }) => {
            if (!user)
              return (
                <Col>
                  <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                </Col>
              );
            if (movies.length === 0) return <div className="main-view" />;
            return (
              <Col md={8}>
                <MovieView
                  movie={movies.find((m) => m._id === match.params.movieId)}
                  onBackClick={() => history.goBack()}
                  handleFavorite={this.handleFavorite}
                />
              </Col>
            );
          }}
        />

        <Route
          path="/directors/:name"
          render={({ match, history }) => {
            if (!user)
              return (
                <Col>
                  <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                </Col>
              );
            if (movies.length === 0) return <div className="main-view" />;
            return (
              <Col md={8}>
                <DirectorView
                  director={
                    movies.find((m) => m.Director.Name === match.params.name)
                      .Director
                  }
                  onBackClick={() => history.goBack()}
                />
              </Col>
            );
          }}
        />

        <Route
          path="/genres/:name"
          render={({ match, history }) => {
            if (!user)
              return (
                <Col>
                  <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                </Col>
              );
            if (movies.length === 0) return <div className="main-view" />;
            return (
              <Col md={8}>
                <GenreView
                  genre={
                    movies.find((m) => m.Genre.Name === match.params.name)
                      .Genre
                  }
                  onBackClick={() => history.goBack()}
                />
              </Col>
            );
          }}
        />
      </Row>
    </Router>
        );
}
}

// #7
let mapStateToProps = state => {
return { movies: state.movies }
}

// #8
export default connect(mapStateToProps, { setMovies } )(MainView);