import React from "react";

function AboutScreen() {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="centerPanel col-lg-10 ">
          <div
            className="d-flex justify-content-center"
            style={{
              height: "100px",
              position: "relative",
              marginLeft: "-120px",
              backgroundColor: "#001427",
              border: "none",
            }}
          ></div>
          <div className="d-flex justify-content-end">
            {" "}
            <h1 className="mt-5 mx-3 boxedText">About</h1>
          </div>
          <div className="container">
            <div className="row justify-content-center pb-5">
              <div className="col-lg-5 mt-5">
                <h5>
                  Anomic is a Berlin based record label started in 2020. We love
                  noise, rock 'n' roll and musicians with soul. Digital and
                  physical releases from bands and artists around the world.
                </h5>
                <h4 className="mt-5">
                  To get in touch send an email to{" "}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=anomic@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "blue" }}
                  >
                    anomic@gmail.com
                  </a>
                </h4>
              </div>
              <div className="col-lg-5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutScreen;
