import React from "react";

const Card = (artist) => {
  return (
    <div className="col-sm-12 p-2">
      <div className="p-2 h-60 artistCard">
        <img
          src={artist.artist.image}
          className="fill"
          alt={artist.artist.name}
        />{" "}
        <h5 className="mt--2 title text-white px-2">{artist.artist.name}</h5>
      </div>
    </div>
  );
};

export default Card;
