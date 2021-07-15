import React from "react";
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
				<div className="centerPanel col-lg-10 ">
					<div className="d-flex justify-content-end">
						<a href="https://www.facebook.com/anomicrecords/">
							<i className="fab fa-facebook-f p-3"></i>
						</a>
						<a href="https://www.instagram.com/anomicrecords/?hl=en">
							<i className="fab fa-instagram p-3"></i>
						</a>
						<a href="https://anomicrecords.bandcamp.com/">
							<i className="fab fa-bandcamp p-3"></i>
						</a>
						<a href="https://www.youtube.com/channel/UCtD0HCtxYqZyvMoR3tavQYA">
							<i className="fab fa-youtube p-3"></i>
						</a>
					</div>
					<div className="d-flex">
						<h1 className="mt-5 mx-3 boxedText">Track in Focus:</h1>
					</div>
					<div className="row w-100">
						<div className="col-lg-5 p-5 col-sm-12 mt-lg-5 ms-lg-5">
							<h5>
								Maybe here we could have a bit of text about the
								track (if you want to have a video here at
								all?). This can be updated whenever.{" "}
							</h5>
							<h5>
								I've linked it to the anomic youtube channel as
								well so the suggested videos at the end will be
								other anomic ones rather than the usual ones
								targeted to the user or whatever.
							</h5>

							<h5>
								Unfortunately it isn't possible as far as I know
								to remove all the youtube branding and stuff
								without paying. You could upload your own videos
								there sometime down the line if you'd rather a
								bit of a cleaner look
							</h5>
						</div>
						<iframe
							src="https://www.youtube.com/embed/nUzTdtJLGuI?modestbranding=1&rel=0"
							title="YouTube video player"
							frameBorder="0"
							autoPlay="1"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							className="mt-3 col-lg-6 p-4"
							style={{ borderBottom: "1px solid grey" }}
						></iframe>
					</div>
					<div className="d-flex justify-content-end mx-3 w-60">
						<h1 className="mt-5 boxedText">Our Artists</h1>
					</div>
					<ArtistList artists={artists}></ArtistList>
					<br />
				</div>
			</div>
		</>
	);
}

export default Homepage;
