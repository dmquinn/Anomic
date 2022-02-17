import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer bg-black px-5 py-4">
      <div className="row">
        <div className="col-lg-1">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=anomic@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="title text-white"
          >
            <h6>Contact</h6>
          </a>{" "}
          <a
            href="https://anomicrecords.bandcamp.com/"
            target="_blank"
            rel="noreferrer"
            className="title text-white"
          >
            <h6>Store</h6>
          </a>{" "}
          <a
            href="https://anomicrecords.bandcamp.com/merch/anomic-zine-1"
            target="_blank"
            rel="noreferrer"
            className="title text-white"
          >
            <h6>Zine</h6>
          </a>{" "}
          <Link to={"/login"} className="text-grey-dark">
            <h6>Admin</h6>
          </Link>{" "}
        </div>{" "}
        <div className="d-flex justify-content-end text-grey-light">
          <h6>&copy; Anomic Records 2022</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
