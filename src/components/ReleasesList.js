import React from "react";
import ReleasesCard from "../components/ReleasesCard";

const List = ({ releases }) => {
  if (!releases || !releases.length) {
    return <h1 className="p-5">No Releases Yet</h1>;
  }
  return (
    <div className="container">
      <div className="row releasesList ">
        {releases &&
          releases.map((release, i) => {
            return (
              <div className="col-sm-12 col-md-6 pb-5">
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
