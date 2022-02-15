import React, { useEffect } from "react";
import ReleasesList from "../components/ReleasesList";
import releases from "../releases";

function Releases() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="d-flex justify-content-center">
      <div className="centerPanel col-lg-10 ">
        <div
          className="d-flex w-100 justify-content-center"
          style={{
            position: "relative",
            height: "100px",
            width: "150%",
            // marginLeft: "-120px",
            backgroundColor: "#001427",
            border: "none",
          }}
        ></div>
        <div className="d-flex justify-content-end mt-5">
          {" "}
          <h1 className=" boxedText mx-3">Releases</h1>
        </div>

        <div className="d-flex justify-content-center">
          <div className="centerPanel col-lg-10">
            <ReleasesList releases={releases} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Releases;
