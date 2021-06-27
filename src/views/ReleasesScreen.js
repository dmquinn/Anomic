import React from "react";
import ReleasesList from "../components/ReleasesList";
import releases from "../releases";

function Releases() {
	return (
		<div>
			<ReleasesList releases={releases} />
		</div>
	);
}

export default Releases;
