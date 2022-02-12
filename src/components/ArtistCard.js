import React from "react";
import "../stylesheets/ArtistCard.css";

const Card = (artist) => {
  return (
    <div className="card d-flex">
      <div className="card align-items-center p-5">
        <img alt="" src={artist.artist.image}></img>
        <div className="d-flex justify-content-center mt-4 cardText">
          <h6>{artist.artist.name}</h6>
        </div>
      </div>
    </div>
  );
};

export default Card;
