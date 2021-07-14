import React from "react";
import "../stylesheets/ArtistCard.css";

const Card = (props) => {
	return (
		<div className="card mt-5 d-flex">
			<div className="card body align-items-center p-1">
				<img alt="" loading="lazy" src={props.imgOne}></img>

				<div className="d-flex justify-content-center mt-4 cardText">
					<h6>{props.name}</h6>
					<h4 className="title">{props.title}</h4>
				</div>
			</div>
		</div>
	);
};

export default Card;
