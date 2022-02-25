import React from "react";
import { Link } from "react-router-dom";
import ArtistCard from "./ArtistCard";

const List = ({ artists }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {!!artists &&
            artists.map((artist, i) => {
              return (
                <Link to={`artists/${artist.name}`}>
                  <ArtistCard artist={artist} key={artist._id}></ArtistCard>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default List;
