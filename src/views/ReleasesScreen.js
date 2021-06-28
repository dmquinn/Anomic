import React, { useEffect } from "react";
import ReleasesList from "../components/ReleasesList";
import releases from "../releases";

function Releases(props) {
	useEffect(() => {
		console.log(props);
	});
	return (
		<div>
			<ReleasesList releases={releases} />
		</div>
	);
}

export default Releases;
