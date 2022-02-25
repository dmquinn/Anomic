import React, { useEffect } from "react";
import { listArtists } from "../actions/artistActions";
import { useDispatch, useSelector } from "react-redux";

const ArtistScreen = () => {
  const dispatch = useDispatch();
  const artistList = useSelector((state) => state.artistList);
  const { artists } = artistList;

  useEffect(() => {
    dispatch(listArtists());
  }, [dispatch]);
  return (
    <>
      <div className="h-5 bg-black" />
      <div className="container">
        <div className="row mt-10">
          {artists &&
            artists.map((artist) => {
              return (
                <div className="col-sm-12 col-md-3 p-2">
                  <div className="h-20 p-2">
                    <img
                      src={artist.image}
                      className="fill"
                      alt={artist.name}
                    />{" "}
                    <p className="mt--2 title text-white">{artist.name}</p>
                  </div>
                </div>
              );
            })}{" "}
        </div>
      </div>
    </>
  );
};
export default ArtistScreen;
