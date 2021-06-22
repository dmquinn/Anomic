import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./artistScreen.css";

function ArtistScreen(props) {
	let artistDetails = props.history.location.state;
	//
	return (
		<>
			{!!artistDetails && (
				<div className="row">
					<img
						className="artistPageImg"
						src={artistDetails.imgTwo}
						alt=""
					></img>
					<h1>{artistDetails.name}</h1>
				</div>
			)}
		</>
	);
}

export default ArtistScreen;
