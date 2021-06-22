import React from "react";
import { Container } from "react-bootstrap";
import List from "../components/List";
import artists from "../artists";
import "./homepage.css";

function homepage(props) {
	return (
		<div>
			<div className="contianer">
				<List artists={artists}></List>
			</div>
		</div>
	);
}

export default homepage;
