 import React from 'react';
 import { Link } from "react-router-dom";

 function FavoriteMovies ({favoriteMovieList}) {
    return (
        <Row> 
            <Col xs={2}>
                 <h4>Favorite Movie</h4>
            </Col>
        </Row>
        
        <Row>
        {favoriteMovieList.map}(movies) => {
            return (
                <Col xs={2} md={6} lg={3}  key={movies._id}>
                    <img src={movies.ImagePath} />
                    <Link to= {'/movies/${movies._id'}>
                        <h4>{movies.title}</h4>
                    </Link>
                    <button variant="secondarty" onClick={() =>removeFav(movies._id) } >Remove from list</button>
                </Col>
            )  
        })
        }
        </Row>
        </>
    )
 } 

 export default FavoriteMovies 