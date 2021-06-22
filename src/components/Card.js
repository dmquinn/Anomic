import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
	const [hover, setHover] = useState(false);

	return (
		<>
			<div
				className="card"
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<img alt="" loading="lazy" src={props.imgOne}></img>
				{hover && (
					<>
						<div className="cardText">
							<h4>{props.name}</h4>
							<h4 className="title">{props.title}</h4>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Card;
