import React, { useEffect } from "react";
import { listArtists } from "../actions/artistActions";
import { useDispatch, useSelector } from "react-redux";

const Releases = () => {
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
              return artist.releases.map((release) => {
                return (
                  <div
                    className="h-20 p-2 col-sm-12 col-md-6 col-lg-3"
                    key={release._id}
                  >
                    <img
                      src={release.image}
                      className="fill bg-black"
                      alt={release.name}
                    />{" "}
                    <h4 className="mt--2 text-white">{release.artist}</h4>
                    <h6 className="mt--3 title text-white">{release.name}</h6>
                  </div>
                );
              });
            })}{" "}
        </div>
      </div>
    </>
  );
};

export default Releases;
