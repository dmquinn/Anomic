import React from "react";

const ArtistSocialMedia = (artist) => {
  console.log(artist.artist);
  return (
    <div className="mx-4 mt-5 color-black">
      {artist.artist.facebook && (
        <a href={artist.artist.facebook}>
          <i className="fab fa-facebook-f p-2"></i>
        </a>
      )}{" "}
      {artist.instagram && (
        <a href={artist.artist.instagram}>
          <i className="fab fa-instagram p-2"></i>
        </a>
      )}
      {artist.artist.bandcamp && (
        <a href={artist.artist.bandcamp}>
          <i className="fab fa-bandcamp p-2"></i>
        </a>
      )}
      {artist.artist.youtube && (
        <a href={artist.artist.youtube}>
          <i className="fab fa-youtube p-2"></i>
        </a>
      )}
      {artist.artist.youtube && (
        <a href={artist.artist.youtube}>
          <i className="fab fa-spotify p-2"></i>
        </a>
      )}
    </div>
  );
};

export default ArtistSocialMedia;
