import React, { useEffect } from "react";
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

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
							<div className="d-flex socialMediaRow w-100 ">
								<a href={artistDetails.facebook}>
									<i className="fab fa-facebook-f p-2"></i>
								</a>
								<a href={artistDetails.instagram}>
									<i className="fab fa-instagram p-2"></i>
								</a>
								<a href={artistDetails.bandcamp}>
									<i className="fab fa-bandcamp p-2"></i>
								</a>
								<a href={artistDetails.youtube}>
									<i className="fab fa-youtube p-2"></i>
								</a>
							</div>
							<div className="row w-100 ">
								<div className="col-lg-5 ms-5 col-md-5 mt-5 bio p-5">
									{artistDetails.bio}
								</div>
								<div className="col-lg-6 col-md-5 mt-5 bio p-5">
									<iframe
										className="artistScreenIframe"
										src={artistDetails.embed}
										title="YouTube video player"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								</div>
							</div>
							<div className="d-flex justify-content-center mt-5">
								<h1 className="boxedText mx-3">RELEASES</h1>
							</div>
							{selected.length > 0 &&
								releaseCards.map((release, i) => {
									return (
										<ReleasesList
											key={i}
											releases={selected}
										/>
									);
								})}
						</div>
					</div>
				</>
			)}
		</>
	);
}

export default ArtistScreen;
