import React, { useEffect } from "react";
import ReleasesList from "../components/ReleasesList";
import releases from "../releases";

function Releases(props) {
	useEffect(() => {
		console.log(props);
	});
	return (
		<div className="releasesScreen">
			<div className="d-flex justify-content-center">
				<h1 className="mt-5 ourArtists">Releases</h1>
			</div>
			<ReleasesList releases={releases} />
		</div>
	);
}

export default Releases;
