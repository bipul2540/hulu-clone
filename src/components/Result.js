import React, { useEffect, useState } from "react";
import "./../style/Result.css";
import VideoCard from "./VideoCard";
import axios from "./../axios";
import request from "./../request";
import FlipMove from "react-flip-move";

function Result({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, [selectedOption]);

  const fetchData = async () => {
    try {
      const response = await axios.get(selectedOption);
      const data = await response.data;
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="result">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Result;
