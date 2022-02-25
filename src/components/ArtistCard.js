import React from "react";

const Card = (artist) => {
  console.log(window.location.href.includes("all-artists"));
  return (
    <div className="col-sm-12 p-2">
      <div
        className={
          !window.location.href.includes("all-artists")
            ? "h-20 p-2"
            : "p-2 h-60"
        }
      >
        <img
          src={artist.artist.image}
          className="fill"
          alt={artist.artist.name}
        />{" "}
        <p className="mt--2 title text-white px-2">{artist.artist.name}</p>
      </div>
    </div>
  );
};

export default Card;
