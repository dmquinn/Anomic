import React from "react";
import "../stylesheets/ReleasesCard.css";

const Card = (props) => {
	return (
		<div className="card mt-5 d-flex">
			<div className="card body align-items-center">
				<img alt="" loading="lazy" src={props.image}></img>

				<div className="d-flex justify-content-center mt-4 cardText">
					<h6>{props.artist}</h6>
					<h4 className="title">{props.title}</h4>
				</div>
			</div>
		</div>
	);
};

export default Card;
