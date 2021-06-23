import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./artistScreen.css";

function ArtistScreen(props) {
	let artistDetails = props.history.location.state;
	//
	return (
		<>
			{!!artistDetails && (
				<div className="row mt-5">
					<div className="col-lg-6">
						<img
							className="artistPageImg"
							src={artistDetails.imgTwo}
							alt=""
						></img>
						<h1>{artistDetails.name}</h1>
					</div>
					<div className="col-lg-6">
						<iframe
							width="560"
							height="315"
							src={artistDetails.embed}
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>
				</div>
			)}
		</>
	);
}

export default ArtistScreen;
