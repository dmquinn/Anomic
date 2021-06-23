import React from "react";
import { Container } from "react-bootstrap";
import List from "../components/List";
import artists from "../artists";
import "./homepage.css";

function homepage(props) {
	return (
		<div>
			<div className="contianer">
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/nUzTdtJLGuI?modestbranding=1"
					title="YouTube video player"
					frameborder="0"
					autoplay="1"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
				<h1>Our Artists</h1>
				<List artists={artists}></List>
			</div>
		</div>
	);
}

export default homepage;
