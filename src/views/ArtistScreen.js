import React, { useEffect } from "react";
import "../stylesheets/ArtistScreen.css";
import ReleasesList from "../components/ReleasesList";
import { listArtistDetails } from "../actions/artistActions";
import { useDispatch, useSelector } from "react-redux";

function ArtistScreen({ match }) {
  const dispatch = useDispatch();
  const artistDetails = useSelector((state) => state.artistDetails);

  useEffect(() => {
    dispatch(listArtistDetails(match.params.name));
    window.scrollTo(0, 0);
  }, [match.params.name, dispatch]);

  return (
    <>
      {!!artistDetails && (
        <>
          <img
            className="artistPageImg"
            src={artistDetails.artist.image}
            alt=""
          />
          <div className="d-flex justify-content-center">
            <div className="centerPanel col-lg-10">
              <h1 className="boxedText cardText mx-5 mt-5">
                {artistDetails.artist.name}
              </h1>
              <div className="mx-4">
                <div className="d-flex socialMediaRow w-100 ">
                  {artistDetails.artist.facebook && (
                    <a href={artistDetails.artist.facebook}>
                      <i className="fab fa-facebook-f p-2"></i>
                    </a>
                  )}{" "}
                  {artistDetails.artist.instagram && (
                    <a href={artistDetails.artist.instagram}>
                      <i className="fab fa-instagram p-2"></i>
                    </a>
                  )}
                  {artistDetails.artist.bandcamp && (
                    <a href={artistDetails.artist.bandcamp}>
                      <i className="fab fa-bandcamp p-2"></i>
                    </a>
                  )}
                  {artistDetails.artist.youtube && (
                    <a href={artistDetails.artist.youtube}>
                      <i className="fab fa-youtube p-2"></i>
                    </a>
                  )}
                  {artistDetails.artist.youtube && (
                    <a href={artistDetails.artist.youtube}>
                      <i className="fab fa-spotify p-2"></i>
                    </a>
                  )}
                </div>
              </div>
              <div className="row w-100 ">
                <div className="col-lg-5 ms-5 col-md-5 mt-5 bio p-5">
                  {artistDetails.artist.description}
                </div>
                <div className="col-lg-6 col-md-5 mt-5 bio p-5">
                  <iframe
                    className="artistScreenIframe"
                    src={artistDetails.artist.youtube}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ArtistScreen;
