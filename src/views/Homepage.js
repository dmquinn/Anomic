import React, { useEffect } from "react";
import ArtistList from "../components/ArtistList";
import Carousel from "../components/Carousel";
import { listArtists } from "../actions/artistActions";
import "../stylesheets/Homepage.css";
import { useDispatch, useSelector } from "react-redux";

const Homepage = () => {
  const dispatch = useDispatch();
  const artistList = useSelector((state) => state.artistList);

  const { artists } = artistList;
  const randomArtist = artists[Math.floor(Math.random() * artists.length)];

  useEffect(() => {
    dispatch(listArtists());
  }, [dispatch]);

  return (
    <>
      <Carousel artists={artists} />
      <div className="container d-flex justify-content-center">
        <div className="centerPanel col-lg-10">
          <div className="d-flex justify-content-end">
            <a href="https://www.facebook.com/anomicrecords/">
              <i className="fab fa-facebook-f p-3"></i>
            </a>
            <a href="https://www.instagram.com/anomicrecords/?hl=en">
              <i className="fab fa-instagram p-3"></i>
            </a>
            <a href="https://anomicrecords.bandcamp.com/">
              <i className="fab fa-bandcamp p-3"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCtD0HCtxYqZyvMoR3tavQYA">
              <i className="fab fa-youtube p-3"></i>
            </a>
          </div>
          <div className="d-flex">
            <h1 className="mt-5 mx-5 cardText">In Focus:</h1>
          </div>
          <div className="row w-100">
            <div className="col-lg-5 p-5 col-sm-12 mt-lg-5 ms-lg-5">
              {randomArtist && (
                <>
                  <h5 className="cardText mb-2">{randomArtist.name}</h5>
                  <h6>{randomArtist.description}</h6>
                </>
              )}
            </div>
            <iframe
              src="https://www.youtube.com/embed/nUzTdtJLGuI?modestbranding=1&rel=0"
              title="YouTube video player"
              frameBorder="0"
              autoPlay="1"
              allow="accelerometer; autoplay;"
              allowFullScreen
              className="mt-3 col-lg-6 p-4"
              style={{ borderBottom: "1px solid grey", position: "relative" }}
            ></iframe>
          </div>
          <div className="d-flex justify-content-end mx-3 w-60">
            <h1 className="mt-5 mx-5 cardText">Our Artists</h1>
          </div>
          <ArtistList artists={artists}></ArtistList>
          <br />
        </div>
      </div>
    </>
  );
};

export default Homepage;
