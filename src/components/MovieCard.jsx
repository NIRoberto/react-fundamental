import React from "react";

const MovieCard = (props) => {
  return (
    <div className="movieCard">
      <img src={"/movie1.webp"} alt="image photo" />
      <h4> {props.movie.title}</h4>
      <p>{props.movie.price}</p>
    </div>
  );
};

export default MovieCard;
