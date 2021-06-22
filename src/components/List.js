import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Loader from "./Loader";
import "./List.css";
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
								<Card
									artist={artist}
									key={artist.id}
									imgOne={artist.imgOne}
									name={artist.name}
								></Card>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default List;
