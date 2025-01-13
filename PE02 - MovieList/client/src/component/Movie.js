import Dropdown from "./Dropdown";
import MovieCard from "./MovieCard";
import genre from "../data/genre.json";
import movie from "../data/movies.json";
import React, { useState } from "react";
import "../styles/movie.css";
function Movie() {
    const [selectedGenre, setSelectedGenre] = useState({ id: null, name: "All Genres" });
    const movies = movie.results;

    const handleGenreSelect = (genre) => {
        setSelectedGenre(genre);
    };

    // Filter movies based on the selected genre
    const filteredMovies = selectedGenre && selectedGenre.id !== null
        ? movies.filter((m) => m.genre_ids.includes(selectedGenre.id))
        : movies;
    return (
        <div>
            <Dropdown title="Select Genre" items={genre.genres} onSelect={handleGenreSelect} />
            <div className="movie-list">
                {filteredMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Movie;