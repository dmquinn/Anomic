import React from "react";

const SocialMediaRow = () => {
  return (
    <div>
      <div className="flex text-center">
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
    </div>
  );
};

export default SocialMediaRow;
