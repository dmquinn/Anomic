import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../stylesheets/Carousel.css";

function Slides({ artists }) {
  return (
    <div className="carouselContainer">
      <div className="carousel">
        {artists && artists.length && (
          <Carousel
            autoPlay={true}
            infiniteLoop
            interval="3000"
            transitionTime="1000"
            dynamicHeight={true}
          >
            {artists.map((artist, i) => {
              return (
                <div key={i}>
                  <img alt={artist.name} src={artist.image} />
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
    </div>
  );
}

export default Slides;
