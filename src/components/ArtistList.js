import React from "react";
import { Link } from "react-router-dom";
import ArtistCard from "./ArtistCard";
import "../stylesheets/ArtistList.css";

const List = ({ artists }) => {
  console.log("artists", artists);
  return (
    <div className="container">
      <div className="row list gx-0">
        {artists.map((artist, i) => {
          return (
            <div className="col-lg-12 p-5 col-md-6" key={i}>
              <Link to={`/${artist.name}`}>
                <ArtistCard artist={artist} key={artist.id}></ArtistCard>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
