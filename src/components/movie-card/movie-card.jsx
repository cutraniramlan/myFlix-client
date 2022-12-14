/* export const BookCard = () => {
    return <div>some title</div>;
  };
 */
/* export const BookCard = (props) => {
    return <div>{props.book.title}</div>;
  }; */

  export const MovieCard = ({ movie, onMovieClick }) => {
    return (
      <div
        onClick={() => {
          onMovieClick(movie);
        }}
      >
        {movie.Title}
      </div>
    );
  };