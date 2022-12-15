import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      image:
        "https://lumiere-a.akamaihd.net/v1/images/image_fc5cb742.jpeg?region=0%2C0%2C540%2C810",
        Title: "The Lion King",
        Description: "Disney's The Lion King is about a young lion named Simba, who is the crown prince of an African Savanna. When his father dies in an accident staged by his uncle, Simba is made to feel responsible for his father's death and must overcome his fear of taking responsibility as the rightful heir to the throne.",
        Genre: "Drama",
        Director: "Roger Allers"
    },
    {
      id: 2,
      image:
        "https://www.imdb.com/title/tt2771200/mediaviewer/rm2049982208/?ref_=tt_ov_i",
        Title: "Beauty and The Beast",
        Description: "Belle, a village girl, embarks on a journey to save her father from a creature that has locked him in his dungeon. Eventually, she learns that the creature is an enchanted prince who has been cursed.",
        Genre: "Romance",
        Director: "Gary Trousdale"
    },
    {
      id: 3,
      image:
        "https://www.themoviedb.org/t/p/original/plcZXvI310FkbwIptvd6rqk63LP.jpg",
        Title: "The Little Mermaid",
        Description:"Ursula, the sea witch, makes a devious deal with Princess Ariel allowing her to meet Eric, the human prince she loves. Unaware of her true intentions, Ariel lands herself in trouble.",
        Genre: "Fantasy",
        Director: "John Musker"
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};