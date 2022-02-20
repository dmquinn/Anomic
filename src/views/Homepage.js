import React, { useEffect } from "react";
import ArtistList from "../components/ArtistList";
import Carousel from "../components/Carousel";
import { listArtists } from "../actions/artistActions";
import "../stylesheets/Homepage.css";
import { useDispatch, useSelector } from "react-redux";
import SocialMediaRow from "../components/SocialMediaRow";

const Homepage = () => {
  const dispatch = useDispatch();
  const artistList = useSelector((state) => state.artistList);
  let randomArtist;
  const { artists } = artistList;
  if (artistList) {
    randomArtist = artists[Math.floor(Math.random() * artists.length)];
  }

  useEffect(() => {
    dispatch(listArtists());
  }, [dispatch]);

  return (
    <>
      <Carousel artists={artists} />
      <section className="blue">
        <SocialMediaRow />
        <div className="container bg-white mt-5 j-center mb-2 ">
          <div className="col-sm-12 j-center">
            <h1 className="title p-5">In Focus:</h1>
            {randomArtist && (
              <div className="j-center">
                {randomArtist.youtube ? (
                  <iframe
                    src={randomArtist.youtube}
                    title="YouTube video player"
                    frameBorder="0"
                    autoPlay="1"
                    allow="accelerometer; autoplay;"
                    allowFullScreen
                    className="mt-3 col-lg-6 p-4"
                    style={{
                      position: "relative",
                      width: "100%",
                    }}
                  />
                ) : (
                  <div className="h-46">
                    <img
                      src={randomArtist.image}
                      alt={randomArtist.name}
                      className="cover w-100 fill"
                    />
                  </div>
                )}
              </div>
            )}
            {randomArtist && (
              <div className="pl-2 col-sm-12 col-md-9">
                <h4 className="title mb-2">{randomArtist.name}</h4>
                <h6 className="text-20 pb-5">{randomArtist.description}</h6>
              </div>
            )}{" "}
          </div>
        </div>
      </section>
      <div className="text-end">
        <h2 className="title px-10 mt-7">Anomic Artists</h2>
      </div>
      <ArtistList artists={artists} />
    </>
  );
};

export default Homepage;
