import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReleasesCard from "./ReleasesCard";
import Loader from "./Loader";
import "../stylesheets/ArtistList.css";

const List = ({ releases }) => {
	return (
		<div className="container mt-5">
			<div className="row list">
				{releases.map((release, i) => {
					return (
						<div className="cardContainer col-lg-4">
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
