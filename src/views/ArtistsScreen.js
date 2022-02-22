import React, { useEffect } from "react";
import ArtistList from "../components/ArtistList";
import { listArtists } from "../actions/artistActions";
import { useDispatch, useSelector } from "react-redux";

const ArtistScreen = () => {
  const dispatch = useDispatch();
  const artistList = useSelector((state) => state.artistList);
  const { artists } = artistList;

  useEffect(() => {
    dispatch(listArtists());
  }, [dispatch]);
  artists && console.log(artists);
  return (
    <div className="col-md-4">
      <ArtistList artists={artists} />
    </div>
  );
};
export default ArtistScreen;
