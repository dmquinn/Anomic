import React, { useEffect } from "react";
import ReleasesList from "../components/ReleasesList";
import { listArtistDetails } from "../actions/artistActions";
import { useDispatch, useSelector } from "react-redux";
import ArtistSocialMedia from "../components/ArtistSocialMedia";

function ArtistScreen({ match }) {
  const dispatch = useDispatch();
  const artistDetails = useSelector((state) => state.artistDetails);

  useEffect(() => {
    dispatch(listArtistDetails(match.params.name));
    window.scrollTo(0, 0);
  }, [match.params.name, dispatch]);
  if (!artistDetails) {
    return null;
  }
  console.log(artistDetails);
  return (
    <div>
      <img
        className="fill w-100"
        src={artistDetails.artist.image}
        alt=""
        style={{ height: "550px" }}
      />
      <div className="">
        <h1 className="mt--6 p-3 bg-pink-light ml-2">
          {artistDetails.artist.name}
        </h1>
      </div>
      <ArtistSocialMedia artist={artistDetails.artist} />
      <div className="row w-100 j-center" style={{ margin: "0!important" }}>
        <div
          className={
            artistDetails.artist.youtube
              ? "col-lg-5 col-md-5 px-5 pt-8 px"
              : "col-sm-12 text-center px-12 pt-5"
          }
        >
          {artistDetails.artist.description}
        </div>
        <div className="col-lg-6 col-md-5 p-5">
          <iframe
            src={artistDetails.artist.youtube}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ArtistScreen;
