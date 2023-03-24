import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SharedLayout from "./Pages/SharedLayout";
import { Movies } from "./Pages/Movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");

  const fetchData = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://www.omdbapi.com/?s=${input.trim()}&apikey=91b049d8`
    );
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={
                <Home
                  input={input}
                  movies={movies}
                  fetchData={fetchData}
                  setInput={setInput}
                />
              }
            ></Route>
            <Route
              path="movies/:idmovies"
              element={<Movies movies={movies}></Movies>}
            ></Route>
            <Route path="*" element={<h2>Not found</h2>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
