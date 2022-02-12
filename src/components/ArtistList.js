import React from "react";
import { Link } from "react-router-dom";
import ArtistCard from "./ArtistCard";
import "../stylesheets/ArtistList.css";

const List = ({ artists }) => {
  return (
    <div className="container">
      <div className="row list gx-0">
        {!!artists &&
          artists.map((artist, i) => {
            return (
              <div className="col-sm-12 p-5" key={i}>
                <Link to={`artists/${artist.name}`}>
                  <ArtistCard artist={artist} key={artist._id}></ArtistCard>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default List;
