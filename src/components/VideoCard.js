import React from "react";
import "./../style/VideoCard.css";

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <div className="videoCard__image">
        <img
          src="https://images.news18.com/ibnlive/uploads/2020/07/1604654831_ganpath-first-look.jpg?impolicy=website&width=400&height=0"
          alt="movie poster"
        />
      </div>

      <div className="videoCard__info">
        <p>This is the film about coding</p>
        <h2>Movie title</h2>
        <p>number of likes....</p>
      </div>
    </div>
  );
}

export default VideoCard;
