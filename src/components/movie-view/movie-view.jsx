export const MovieView = ({ movie, onBackClick }) => {
    return (
      <div>
        <div>
          <img src={movie.image} />
        </div>
        <div>
          <span>Title: </span>
          <span>{book.title}</span>
        </div>
        <div>
          <span>Author: </span>
          <span>{book.author}</span>
        </div>
        <button onClick={onBackClick}>Back</button>
      </div>
    );
  };