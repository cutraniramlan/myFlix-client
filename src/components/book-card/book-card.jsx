/* export const BookCard = () => {
    return <div>some title</div>;
  };
 */
/* export const BookCard = (props) => {
    return <div>{props.book.title}</div>;
  }; */

  export const BookCard = ({ book }) => {
    return (
      <div
        onClick={() => {
          setSelectedBook(book);
        }}
      >
        {book.title}
      </div>
    );
  };