import React from 'react'
import "./MovieCard.scss"

const MovieCard = ({data}) => {

    return (
        <div className="card__item">
            <div className="card__inner">
                <div className="card__top">
                    <img src={data.Poster} alt={data.Title}/>
                </div>
                <div className="card__bottom">
                    <div className="card__info">
                        <h4>{data.Title}</h4>
                        <p>{data.Year}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
