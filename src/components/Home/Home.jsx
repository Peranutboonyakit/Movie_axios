import React, { useEffect } from 'react'
import MovieList from "../MovieList/MovieList"
import movieApi from "../../const/movieApi"
import { APIKey } from "../../const/movieKey.js"
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movieSlice'

const Home = () => {

  const movieText = "Harry";
  const dispatch = useDispatch()
  
  useEffect(()=>{
    const fetchMovies = async () => {
      const response = await movieApi.get(
        `?APIKey=${APIKey}&s=${movieText}&type=movie`
        )
        .catch((err)=>{
          console.log("Err" , err)
        });
        dispatch(addMovies(response.data));
    };
    fetchMovies()
  });

  return (
    <div className="home">
      <div className="banner__img"></div>
      <MovieList />
    </div>
  )
}

export default Home
