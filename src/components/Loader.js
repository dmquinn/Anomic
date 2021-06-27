import React from "react";
import "../stylesheets/Loader.css";

const Loader = () => {
	return (
		<div>
			<div className="overlay">
				<div className="ring"></div>
			</div>
		</div>
	);
};

export default Loader;
