import React from "react";
import "../stylesheets/header.css";

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
					<div className="container w-100 justify-content-center">
						<ul className="navbar-nav">
							<li className="nav-item active">
								<a className="nav-link " href="/">
									ARTISTS
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/releases">
									RELEASES
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									EVENTS
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									ABOUT
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
