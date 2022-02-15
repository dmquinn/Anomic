import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container footer">
      <div className="row mt-5 w-100 ">
        <div className="col-lg-1">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=anomic@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "white",
              textDecoration: "underline pink",
            }}
          >
            <h6>Contact</h6>
          </a>{" "}
          <a
            href="https://anomicrecords.bandcamp.com/"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "white",
              textDecoration: "underline pink",
            }}
          >
            <h6>Store</h6>
          </a>{" "}
          <a
            href="https://anomicrecords.bandcamp.com/merch/anomic-zine-1"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "white",
              textDecoration: "underline pink",
            }}
          >
            <h6>Zine</h6>
          </a>{" "}
          <Link
            to={"/login"}
            style={{
              color: "gray	",
              textDecoration: "none",
            }}
          >
            <h6>Admin</h6>
          </Link>{" "}
        </div>{" "}
        <div className="d-flex justify-content-end">
          <h6>&copy; Anomic Records 2021</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
