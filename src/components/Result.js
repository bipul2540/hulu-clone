import React, { useEffect, useState } from "react";
import "./../style/Result.css";
import VideoCard from "./VideoCard";
import axios from "./../axios";
import request from "./../request";

function Result({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, [selectedOption]);

  const fetchData = async () => {
    const response = await axios.get(selectedOption);
    const data = await response.data;
    setMovies(data.results);
    console.log(data);
  };

  return (
    <div className="result">
      {movies.map((movie) => (
        <VideoCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Result;
