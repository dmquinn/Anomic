import React from "react";

const Card = (artist) => {
  return (
    <div className="h-60 ">
      <img alt="" src={artist.artist.image} className="fill"></img>
      <div>
        <h6 className="title text-black ml-3 mt-2">{artist.artist.name}</h6>
      </div>
    </div>
  );
};

export default Card;
