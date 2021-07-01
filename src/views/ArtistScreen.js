import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "../stylesheets/artistScreen.css";
import releases from "../releases";

function ArtistScreen(props) {
	useEffect(() => {
		releases.map((release, i) => {
			release.artist === artistDetails.name
				? console.log("wah", release.artist)
				: console.log("waaah");
			match = release.artist;
		});
	});
	let artistDetails = props.history.location.state;
	let match = "";

	//
	return (
		<>
			{!!artistDetails && (
				<>
					<div>
						<img
							className="artistPageImg"
							src={artistDetails.imgTwo}
							alt=""
						/>
						<div className="socialMediaColumn">
							<a href={artistDetails.facebook}>
								<i className="fab fa-facebook-f p-2"></i>
							</a>
							<a href={artistDetails.instagram}>
								<i class="fab fa-instagram p-2"></i>
							</a>
							<a href={artistDetails.bandcamp}>
								<i class="fab fa-bandcamp p-2"></i>
							</a>
							<a href={artistDetails.youtube}>
								<i class="fab fa-youtube p-2"></i>
							</a>
						</div>
						<h1 className="artistScreenName p-2">
							{artistDetails.name}
						</h1>
					</div>
					<div className="d-flex justify-content-center mt-5">
						<div className="col-lg-5 mt-5 bio">
							{artistDetails.bio}
						</div>
					</div>
					<div className="d-flex justify-content-center mt-5">
						<h1>RELEASES</h1>
					</div>
					{releases.map((release, i) => {
						release.artist === artistDetails.name && (
							<h1 className="">BIGGONEEE{match}</h1>
						);
					})}

					<div className="">
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
				</>
			)}
		</>
	);
}

export default ArtistScreen;
