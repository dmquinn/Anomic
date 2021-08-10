import React, { useEffect } from "react";
import ArtistList from "../components/ArtistList";
import artists from "../artists";
import "../stylesheets/Homepage.css";

function ArtistScreen(props) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="contianer d-flex justify-content-center">
			<div className="centerPanel col-lg-10 ">
				<div
					className="d-flex justify-content-center"
					style={{
						height: "100px",
						position: "relative",
						backgroundColor: "#001427",
						border: "none",
					}}
				></div>
				<div className="d-flex justify-content-end boxedText">
					{" "}
					<h1 className="">Our Artists</h1>
				</div>
				<ArtistList artists={artists}></ArtistList>
				<br />
			</div>
		</div>
	);
}
//test
export default ArtistScreen;
