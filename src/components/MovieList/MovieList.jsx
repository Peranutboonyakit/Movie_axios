import React from 'react'
import "./MovieList.scss"
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movieSlice'
import MovieCard from "../MovieCard/MovieCard"

const MovieList = () => {

    const movies = useSelector(getAllMovies);

    let renderMovies = "";
    renderMovies = movies.Response === "True" ?
        (
            movies.Search.map((movie, index) => (
                
                <MovieCard key={index} data={movie} />
                
            ))
        ) : (
            <div className="movies__err">
                <h3>{movies.Error}</h3 >
            </div >
        )

    return (
        <div className="movie__wrapper">
            <div className="movie__list">
                <h2>Movies</h2>
                <div className="movie__container">
                    {renderMovies}
                </div>
            </div>
        </div>
    )
}

export default MovieList
