import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [language, setLanguage] = useState("");
  const [movies, setMovies] = useState();

  useEffect(() => {
    allMovies();
  }, []);
  useEffect(() => {
    allMovies();
  }, [movies]);

  const addMovie = async () => {
    const baseUrl = "http://localhost:8000/add";
    const response = await axios.post(baseUrl, {
      name: name,
      genre: genre,
      rating: rating,
      language: language,
    });
  };

  const allMovies = async () => {
    const baseUrl = "http://localhost:8000/movies";
    const response = await axios.get(baseUrl);
    setMovies(response.data);
  };

  const deleteMovie = async () => {
    const baseUrl = "http://localhost:8000/delete";
    const response = await axios.delete(baseUrl);
  };

  const updateRating = async () => {
    const baseUrl = "http://localhost:8000/update";
    const response = await axios.put(baseUrl, { rating: 8 });
  };

  return (
    <div>
      <h2>Add movie </h2>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Enter Movie Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <input
        id="genre"
        type="text"
        name="genre"
        placeholder="Enter Movie Genre"
        value={genre}
        onChange={(e) => {
          setGenre(e.target.value);
        }}
      />
      <br />
      <input
        id="rating"
        type="text"
        name="rating"
        placeholder="Enter Movie rating"
        value={rating}
        onChange={(e) => {
          setRating(e.target.value);
        }}
      />
      <br />
      <input
        id="language"
        type="text"
        name="language"
        placeholder="Enter Movie Language"
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
      />
      <br />
      <button type="submit" onClick={addMovie}>
        Add Movie
      </button>
      <br />
      <button onClick={deleteMovie}>Delete Movie</button>
      <br />
      <button type="submit" onClick={updateRating}>
        Update rating
      </button>
      <br />
      <h2>Movies list</h2>
      {movies &&
        movies.map((data) => {
          return (
            <>
              <div>Name: {data.name}</div>
              <div>Genre: {data.genre}</div>
              <div>Rating: {data.rating}</div>
              <div>Language: {data.language}</div>
              <br />
            </>
          );
        })}
    </div>
  );
}

export default App;
