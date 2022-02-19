import React, { useEffect } from "react";
import ArtistList from "../components/ArtistList";
// import "../stylesheets/Homepage.css";

function ArtistScreen(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="d-flex justify-content-center"></div>;
}
export default ArtistScreen;
