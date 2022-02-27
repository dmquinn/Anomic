import React from "react";

function AboutScreen() {
  return (
    <>
      <div className="j-center">
        <div
          className="j-center"
          style={{
            height: "100px",
            position: "relative",
            marginLeft: "-120px",
            backgroundColor: "#001427",
            border: "none",
          }}
        ></div>
        <div className="j-end">
          {" "}
          <h1 className="mt-10 mx-5 title">About</h1>
        </div>
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-lg-5 mt-5">
              <h6>
                Anomic is a Berlin based record label started in 2020. We love
                noise, rock 'n' roll and musicians with soul. Digital and
                physical releases from bands and artists around the world.
              </h6>
              <p className="mt-5 text-grey-darker">
                To get in touch send an email to{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=anomic@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink-dark mb-2"
                >
                  anomic@gmail.com
                </a>
              </p>
            </div>
            <div className="col-lg-5">
              <img
                src="https://stringfixer.com/files/118228407.jpg"
                className="fill mt-3"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutScreen;
