import React, { useEffect } from "react";
import ReleasesList from "../components/ReleasesList";
import releases from "../releases";

function Releases(props) {
	useEffect(() => {
		console.log(props);
	});
	return (
		<div className="contianer d-flex justify-content-center">
			<div className="centerPanel col-lg-10 ">
				<div
					className="d-flex justify-content-center"
					style={{
						position: "relative",
						height: "100px",
						width: "100vw",
						marginLeft: "-120px",
						backgroundColor: "#001427",
						border: "none",
					}}
				></div>
				<div className="d-flex justify-content-end mt-5">
					{" "}
					<h1 className=" boxedText">Releases</h1>
				</div>
				<div className="centerPanel col-lg-10">
					<ReleasesList releases={releases} />
				</div>
			</div>
		</div>
	);
}

export default Releases;
