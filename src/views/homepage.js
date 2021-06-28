import React from "react";
import { Container } from "react-bootstrap";
import ArtistList from "../components/ArtistList";
import artists from "../artists";
import "./homepage.css";

function homepage(props) {
	return (
		<div className="section">
			<div className="contianer">
				<iframe
					src="https://www.youtube.com/embed/nUzTdtJLGuI?modestbranding=1"
					title="YouTube video player"
					frameborder="0"
					autoplay="1"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
				<div className="d-flex justify-content-center">
					<a href="https://www.facebook.com/anomicrecords/">
						<i className="fab fa-facebook-f p-lg-5"></i>
					</a>
					<a href="https://www.instagram.com/anomicrecords/?hl=en">
						<i class="fab fa-instagram p-lg-5"></i>
					</a>
					<a href="https://anomicrecords.bandcamp.com/">
						<i class="fab fa-bandcamp p-lg-5"></i>
					</a>
					<a href="https://www.youtube.com/channel/UCtD0HCtxYqZyvMoR3tavQYA">
						<i class="fab fa-youtube p-lg-5"></i>
					</a>
				</div>
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
