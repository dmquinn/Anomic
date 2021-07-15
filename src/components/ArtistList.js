import React from "react";
import { Link } from "react-router-dom";
import ArtistCard from "./ArtistCard";
import "../stylesheets/ArtistList.css";

const List = ({ artists }) => {
	return (
		<div className="container">
			<div className="row list gx-0">
				{artists.map((artist, i) => {
					return (
						<div className="col-lg-4 col-md-6">
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
