import React from "react";
import request from "../request";
import "./../style/Navbar.css";

function Navbar({ setSelectedOption }) {
  return (
    <div className="navbar">
      <h2 onClick={() => setSelectedOption(request.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setSelectedOption(request.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchActionMovies)}>
        Action
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchHorrorMovies)}>
        Horror
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchRomaceMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchMystery)}>Mystry</h2>
      <h2 onClick={() => setSelectedOption(request.fetchDocumentries)}>
        Sci-fi
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchTrending)}>
        Animation
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchTv)}>Movie</h2>
      <h2 onClick={() => setSelectedOption(request.fetchComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchTrending)}>
        South indian
      </h2>
    </div>
  );
}

export default Navbar;
