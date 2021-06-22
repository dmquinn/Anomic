import React from "react";
import "./header.css";

function Header() {
	return (
		<header>
			<nav className="navbar navbar-expand-lg">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav offset-2">
						<li className="nav-item active">
							<a className="nav-link " href="/">
								ARTISTS
							</a>
						</li>
						<li className="nav-item offset-3">
							<a className="nav-link" href="#">
								RELEASES
							</a>
						</li>
						<li className="nav-item offset-3">
							<a className="nav-link" href="#">
								EVENTS
							</a>
						</li>
						<li className="nav-item offset-3">
							<a className="nav-link disabled" href="#">
								ABOUT
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Header;
