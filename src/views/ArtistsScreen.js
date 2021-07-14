import React from "react";
import ArtistList from "../components/ArtistList";
import artists from "../artists";
import "../stylesheets/Homepage.css";

function ArtistScreen(props) {
	return (
		<div className="contianer d-flex justify-content-center">
			<div className="centerPanel col-lg-10 ">
				<div
					className="d-flex justify-content-center"
					style={{
						height: "100px",
						width: "100vw",
						position: "relative",
						marginLeft: "-120px",
						backgroundColor: "#001427",
						border: "none",
					}}
				></div>
				<div className="d-flex justify-content-end">
					{" "}
					<h1 className="mt-5 mx-3 boxedText">Our Artists</h1>
				</div>
				<ArtistList artists={artists}></ArtistList>
				<br />
			</div>
		</div>
	);
}
//test
export default ArtistScreen;
