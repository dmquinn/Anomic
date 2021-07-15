import React from "react";

function EventsScreen() {
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
				<div className="d-flex justify-content-end">
					{" "}
					<h1 className="mt-5 mx-3 boxedText">Events</h1>
				</div>
				<h1 className="offset-1 mt-5">No Events to Show Yet!</h1>
				<br />
			</div>
		</div>
	);
}

export default EventsScreen;
