import React, { useState } from "react";
import MovieData from "../data.json"


const Movie = () => {

    const [searchMovie, setSearchMovie] = useState("");

    return (
        <>
        <header>
                <input 
                className="search" 
                type="text" 
                placeholder="Search..." 
                onChange = {(event) => {
                    setSearchMovie(event.target.value);
                }}
                />
        </header>
        <div className = "movie-container">
            {MovieData.filter((MovieDetail) => {
                if(searchMovie === ""){
                    return MovieDetail;
                }
                else if(MovieDetail.Title.toLocaleLowerCase().includes(searchMovie.toLocaleLowerCase())){
                    return MovieDetail;
                }
            }).map((MovieDetail, index) => {
                return <div className="movie" key={index}>
                        <img src= {MovieDetail.Poster} className="poster" />
                        <div className="movie-info">
                            <h4>{MovieDetail.Title}</h4>
                            <span>{MovieDetail.Year}</span>
                        </div>
                        <div className="movie-over">
                            <h4>Overview: </h4>
                            <p>{MovieDetail.Plot}</p>
                            <h5>Duration: {MovieDetail.Runtime}</h5>
                            <h5>Released: {MovieDetail.Released}</h5>
                            <h5>Box_Office Collection: {MovieDetail.BoxOffice}</h5>
                        </div>
                    </div>

            })}
        </div>
        </>
    )
    
}

export default Movie;