import React from "react";
import ReleasesCard from "../components/ReleasesCard";

const List = ({ releases }) => {
  return (
    <div className="container ">
      <div className="row releasesList ">
        {releases &&
          releases.map((release, i) => {
            return (
              <div className="col-lg-4 col-md-6 pb-5">
                <ReleasesCard
                  release={release}
                  key={release._id}
                  image={release.image}
                  name={release.name}
                  description={release.description}
                ></ReleasesCard>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default List;
