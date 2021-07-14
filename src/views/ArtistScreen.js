import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "../stylesheets/ArtistScreen.css";
import releases from "../releases";
import ReleasesList from "../components/ReleasesList";

function ArtistScreen(props) {
	const artistDetails = props.history.location.state;
	let releaseCards = [];

	const selected = releases.filter((rel) => {
		return rel.artist === artistDetails.name;
	});
	releaseCards = [...new Set(selected.map((q) => q.artist))];

	return (
		<>
			{!!artistDetails && (
				<>
					<img
						className="artistPageImg"
						src={artistDetails.imgTwo}
						alt=""
					/>
					<h1 className="boxedText">{artistDetails.name}</h1>
					<div className="contianer d-flex justify-content-center">
						<div className="centerPanel col-lg-10">
							<div className="socialMediaRow off">
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

							<div className="d-flex justify-content-center mt-5">
								<div className="col-lg-5 col-md-5 col-sm-8 mt-5 bio p-5">
									{artistDetails.bio}
								</div>
							</div>
							<div className="d-flex justify-content-center mt-5">
								<h1 className="boxedText mx-3">RELEASES</h1>
							</div>
							{selected.length > 0 &&
								releaseCards.map((release, i) => {
									return (
										<ReleasesList
											key={releases.id}
											releases={selected}
										/>
									);
								})}

							<div className="mt-5">
								<iframe
									className="mt-5"
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
					</div>
				</>
			)}
		</>
	);
}

export default ArtistScreen;
