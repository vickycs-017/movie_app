import React from "react";
import MovieData from "../data.json"
// const IMAGE_API = "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg";

const Movie = () => {
    return (
        <div className = "movie-container">
            {MovieData.map((MovieDetail, index) => {
                return <div className="movie">
                        <img src= {MovieDetail.Poster} className="poster" />
                        <div className="movie-info">
                            <h4>{MovieDetail.Title}</h4>
                            <span>{MovieDetail.Year}</span>
                        </div>
                        <div className="movie-over">
                            <h5>Overview: </h5>
                            <p>{MovieDetail.Plot}</p>
                        </div>
                    </div>

            })}
        </div>
    )
    
}

export default Movie;