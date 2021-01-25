import React, { forwardRef } from "react";
import "./../style/VideoCard.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div className="videoCard" ref={ref}>
      <div className="videoCard__image">
        <img
          src={`${base_url}${movie.backdrop_path || movie.poster__path}`}
          alt="movie poster"
        />
      </div>

      <div className="videoCard__info">
        <p className="desc">
          {movie.overview.slice(0, 80) + " ..."} <span>read more</span>
        </p>
        <h2>{movie.original_title}</h2>
        <p className="desc2">
          {movie.media_type && `${movie.media_type}`}
          {movie.release_date || movie.first_air_date}
          •<ThumbUpIcon /> {movie.vote_count}
        </p>
      </div>
    </div>
  );
});

export default VideoCard;
