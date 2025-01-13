import React, { useState } from "react";
import genre from "../data/genre.json";
import "../styles/movieCard.css";
function MovieCard({ movie }) {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const movieGenres = movie.genre_ids.map((id) => {
        const mapgenre = genre.genres.find((g) => g.id === id);
        return mapgenre ? mapgenre.name : null;
    });

    const handleCardClick = () => {
        setPopupVisible(true);
    };

    const handleClosePopup = (e) => {
        e.stopPropagation();
        setPopupVisible(false);
    };
    const handlePopupClick = (e) => {
        e.stopPropagation(); // Prevents clicks inside the popup from closing it
    };
    return (
        <div className="card" onClick={handleCardClick}>
            <h2>{movie.title}</h2>
            <p className="genre">Genre: {movieGenres.join(", ")}</p>
            <p>Released Date: {new Date(movie.release_date).getFullYear()}</p>

            {isPopupVisible && (
                <div className="popup" onClick={handleClosePopup}>
                    <div className="popup-content" onClick={handlePopupClick}>
                        <h3>{movie.title}</h3>
                        <button className="close-btn" onClick={handleClosePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default MovieCard;