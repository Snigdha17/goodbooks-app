import { useState } from "react";
import "./styles.css";

const books = {
  fiction: [
    {
      name: "Thousand Splendid Suns",
      author: "Khaled Hussaini",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Where the Crawdads Sing",
      author: "Delia Owens",
      rating: "⭐⭐⭐⭐"
    }
  ],

  nonFiction: [
    { name: "Educated", author: "Tara Westover", rating: "⭐⭐⭐⭐" },
    { name: "Wings of Fire", author: "APJ Abdul Kalam", rating: "⭐⭐⭐⭐⭐" }
  ],

  investing: [
    {
      name: "Psychology of Money",
      author: "Morgan Housel",
      rating: "⭐⭐⭐⭐⭐"
    },
    { name: "One up on Wall Street", author: "Peter Lynch", rating: "⭐⭐⭐" }
  ]
};

var genresToDisplay = Object.keys(books);

export default function App() {
  var [currentGenre, setGenre] = useState("fiction");

  function genreClickHandler(genre) {
    console.log(genre);
    setGenre(genre);
    console.log(currentGenre);
  }

  return (
    <div className="App">
      <h1>Goodbooks</h1>
      <h3>Find out my favourite books! Select genre to get started</h3>
      <div id="genreDisplay">
        {genresToDisplay.map((genre) => {
          return <span onClick={() => genreClickHandler(genre)}>{genre} </span>;
        })}
      </div>
      <div id="booksDisplay">
        <ul>
          {books[currentGenre].map((book) => (
            <li id="books-list" key={book.name}>
              <div id="book-name"> {book.name} </div>
              <div id="author">By {book.author} </div>
              <div id="book-rating"> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
