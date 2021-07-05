import React from "react";
import ArtistList from "../components/ArtistList";
import artists from "../artists";
import "../stylesheets/Homepage.css";

function homepage(props) {
	return (
		<div className="section">
			<div className="contianer">
				<div className="d-flex justify-content-center">
					<h1 className="mt-5 ourArtists">Our Artists</h1>
				</div>
				<ArtistList artists={artists}></ArtistList>
				<br />
			</div>
		</div>
	);
}

export default homepage;
