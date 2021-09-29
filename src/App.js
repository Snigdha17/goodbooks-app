import { useState } from "react";
import "./styles.css";

const books = {
  fiction: [
    {
      name: "Thousand Splendid Suns",
      description: "A glimpse of life in Kabul under the Taliban",
      author: "Khaled Hussaini",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Where the Crawdads Sing",
      description: "A coming-of-age story",
      author: "Delia Owens",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "The Song of Achilles",
      description: "Homer's Illiad from Patroclus' perspective",
      author: "Delia Owens",
      rating: "⭐⭐⭐⭐"
    }
  ],

  nonFiction: [
    {
      name: "Educated",
      description:
        "The story of a young girl's pursuit of education against all odds",
      author: "Tara Westover",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Wings of Fire",
      description:
        "Life, education and career of Dr. APJ Abdul Kalam, former president of India",
      author: "Dr. APJ Abdul Kalam",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "A Short History of Nearly Everything",
      description:
        "Briefly explains nearly everything from the beginning of time in an accessible language",
      author: "Bill Bryson",
      rating: "⭐⭐⭐⭐⭐"
    }
  ],

  investing: [
    {
      name: "Psychology of Money",
      description: "Timeless lessons on wealth, greed and happiness",
      author: "Morgan Housel",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "One up on Wall Street",
      description: "A beginner's guide to investing in the stock market",
      author: "Peter Lynch",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Investing for dummies",
      description: "Financial planning for beginners",
      author: "Eric Tyson",
      rating: "⭐⭐⭐"
    }
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
              <div id="description">{book.description} </div>
              <div id="book-rating"> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
