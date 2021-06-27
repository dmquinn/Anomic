import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ArtistCard from "./ArtistCard";
import Loader from "./Loader";
import "../stylesheets/ArtistList.css";
// prepare for deployment environment variable

const List = ({ artists }) => {
	return (
		<div className="container mt-5">
			<div className="row list">
				{artists.map((artist, i) => {
					return (
						<div className="cardContainer col-lg-4">
							<Link
								to={{
									pathname: `artist/${artist.name}`,
									state: artist,
								}}
							>
								<ArtistCard
									artist={artist}
									key={artist.id}
									imgOne={artist.imgOne}
									name={artist.name}
								></ArtistCard>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default List;
