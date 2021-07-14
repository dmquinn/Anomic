import React from "react";
import { Container } from "react-bootstrap";
import ArtistList from "../components/ArtistList";
import artists from "../artists";
import Carousel from "../components/Carousel";
import "../stylesheets/Homepage.css";
//test
function Homepage(props) {
	return (
		<>
			<Carousel />
			<div className="contianer d-flex justify-content-center">
				{" "}
				<div className="centerPanel col-lg-10">
					<div className="d-flex">
						<h1 className="mt-5 mx-3 boxedText">Track in Focus:</h1>
					</div>
					<iframe
						src="https://www.youtube.com/embed/nUzTdtJLGuI?modestbranding=1&rel=0"
						title="YouTube video player"
						frameborder="0"
						autoplay="1"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
						className="mt-3"
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

					<div className="d-flex justify-content-end mx-3 ">
						<h1 className="mt-2 boxedText">Our Artists</h1>
					</div>
					<ArtistList artists={artists}></ArtistList>
					<br />
				</div>
			</div>
		</>
	);
}

export default Homepage;
