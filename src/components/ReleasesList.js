import React from "react";
import { Link } from "react-router-dom";
import ReleasesCard from "../components/ReleasesCard";
import "../stylesheets/ReleasesList.css";

const List = ({ releases }) => {
	return (
		<div className="container ">
			<div className="row releasesList ">
				{releases.map((release, i) => {
					return (
						<div className="cardContainer col-lg-4 col-md-6">
							<Link
								to={{
									pathname: `releases/${release.title}`,
									state: release,
								}}
							>
								<ReleasesCard
									release={release}
									key={release.id}
									image={release.image}
									title={release.title}
									artist={release.artist}
								></ReleasesCard>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default List;
